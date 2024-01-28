import * as w from "@/styles/whole.css";
import * as s from "./page.css";
import clsx from "clsx";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { TextLink } from "@/components/TextLink/TextLink";
import { getCountries } from "@/lib/cms";
import Image from "next/image";
import Link from "next/link";

export default async function Collection() {
  const contents = await getCountries();
  return (
    <div className={clsx(w.container)}>
      <PageTitle title="国の一覧" />
      <p className={clsx(s.sub_title)}>現在閲覧することができる国です。</p>
      <div className={clsx(s.collection_wrapper)}>
        <div>
          {contents.map((e, index) => (
            <Link key={index} className={clsx(s.card_wrapper)} href={`/map/${e.id}`}>
              <Image
                alt="flag"
                src={e.country_flag_image?.url || ""}
                height={e.country_flag_image?.height}
                width={e.country_flag_image?.width}
                className={clsx(s.card_image)}
              />
              <div className={clsx(s.card_content)}>
                <p>{e.country_name_jp}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
