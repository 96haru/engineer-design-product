"use client";

import { useEffect, useState } from "react";
import { getCountries } from "@/lib/getCountries";
import { useRouter } from "next/navigation";
import * as w from "@/styles/whole.css";
import * as s from "./page.css";
import clsx from "clsx";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { TextLink } from "@/components/TextLink/TextLink";

export default function Collection() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);

  interface CountriesObject {
    country_name_jp: string;
    id: string;
  }

  const [countries, setCountries] = useState<CountriesObject[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const country = await getCountries();
        if (country === "error") {
          router.push("/");
        } else {
          setCountries(country);
        }
        // console.log(country); // 最新の状態をログに出力
      } catch (error) {
        console.error("error: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]);

  return (
    <div className={clsx(w.container)}>
      <PageTitle title="国の一覧" />
      <p className={clsx(s.sub_title)}>現在閲覧することができる国です。</p>
      <div className={clsx(s.collection_wrapper)}>
        {loading ? (
          <div>
            <h1 className={clsx(s.loading_text)}>読み込み中</h1>
          </div>
        ) : (
          <div>
            {countries.map((e, index) => (
              <div key={index}>
                <TextLink href={`/map/${e.id}`} blank={false}>
                  {e.country_name_jp}
                </TextLink>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
