import * as w from "@/styles/whole.css";
import * as s from "./page.css";
import clsx from "clsx";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { TextLink } from "@/components/TextLink/TextLink";
import { getCountries } from "@/lib/cms";

export default async function Collection() {
  const contents = await getCountries();
  return (
    <div className={clsx(w.container)}>
      <PageTitle title="国の一覧" />
      <p className={clsx(s.sub_title)}>現在閲覧することができる国です。</p>
      <div className={clsx(s.collection_wrapper)}>
        <div>
          {contents.map((e, index) => (
            <div key={index}>
              <TextLink href={`/map/${e.id}`} blank={false}>
                {e.country_name_jp}
              </TextLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
