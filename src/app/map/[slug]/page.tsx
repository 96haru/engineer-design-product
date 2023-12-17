"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

import * as w from "@/styles/whole.css";
import * as s from "./page.css";
import { getCountry } from "@/lib/getCountry";
import parse from "html-react-parser";

import { useEffect, useState } from "react";
import Image from "next/image";

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
  }
  const [content, setContent] = useState<content>({
    id: "",
    country_name_jp: "",
    country_body: "",
    country_flag_image: {
      url: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const country = await getCountry(slug);
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
                height={560}
                width={560}
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
