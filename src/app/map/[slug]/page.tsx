"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";

import * as w from "@/styles/whole.css";
import * as s from "./page.css";
import { getCountry } from "@/lib/getCountry";
import parse from "html-react-parser";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Map() {
  const pathname = usePathname();
  // パスを"/"で分割して、最後の要素を取得
  const parts = pathname.split("/");
  const slug = parts[parts.length - 1];

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
        const country = await getCountry("japan");
        setContent(country);
        // console.log(country); // 最新の状態をログに出力
      } catch (error) {
        console.error("error: ", error);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <div className={clsx(w.container)}>
      <div className={clsx(s.map_wrapper)}>
        <div>
          <Image
            src={content.country_flag_image.url}
            alt="flag"
            height={560}
            width={340}
          />
          <h1>{content.country_name_jp}</h1>
          {parse(content.country_body)}
        </div>
      </div>
    </div>
  );
}
