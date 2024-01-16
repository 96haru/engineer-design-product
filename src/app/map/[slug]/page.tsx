"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

import * as w from "@/styles/whole.css";
import * as s from "./page.css";
import { getCountryDetail } from "@/lib/getCountryDetail";
import parse from "html-react-parser";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TextLink } from "@/components/TextLink/TextLink";

export default function Map() {

  const pathname = usePathname();
  const parts = pathname.split("/");
  const slug = parts[parts.length - 1];

  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  interface content {
    id: string;
    country_name_jp: string;
    country_body: string;
    country_flag_image: {
      url: string;
    };
    country_region: string;
    country_population: string;
    population_year: string;
  }
  const [content, setContent] = useState<content>({
    id: "",
    country_name_jp: "",
    country_body: "",
    country_flag_image: {
      url: "",
    },
    country_region: "",
    country_population: "",
    population_year: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const country = await getCountryDetail(slug);
        if (country === "error") {
          router.push("/");
        } else {
          setContent(country);
        }
        // console.log(country); // 最新の状態をログに出力
      } catch (error) {
        console.error("error: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router, slug]);

  return (
    <div className={clsx(w.container)}>
      <div className={clsx(s.map_wrapper)}>
        {loading ? (
          <div>
            <h1 className={clsx(s.loading_text)}>読み込み中</h1>
          </div>
        ) : (
          <div className={clsx(s.content_wrapper, s.content_body)}>
            <div>
              <Image
                src={content.country_flag_image.url}
                alt="flag"
                height={240}
                width={320}
                sizes="100vw"
                className={clsx(s.flag_image, w.borderRadiusMd)}
                priority={false}
              />
              <h1 className={clsx(s.country_name)}>
                {content.country_name_jp}
              </h1>
            </div>
            <div>
              <h2>基本情報</h2>
              <table className={clsx(s.table)}>
                <tbody>
                  <tr>
                    <th>地域</th>
                    <td>{content.country_region}</td>
                  </tr>
                  <tr>
                    <th>人口</th>
                    <td>
                      {content.country_population}（{content.population_year}）
                    </td>
                  </tr>
                  <tr>
                    <th>マップ</th>
                    <td>
                      <TextLink
                        href={`https://www.google.com/maps/place/${content.country_name_jp}`}
                        blank={true}
                      >
                        Google map
                      </TextLink>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className={s.from_wiki}>Wikipediaより引用</p>
            </div>
            <div>
              <h2>説明</h2>
              {parse(content.country_body)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
