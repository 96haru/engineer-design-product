import { Detail, getCountryDetail } from "@/lib/cms";
import clsx from "clsx";
import Image from "next/image";
import { TextLink } from "../TextLink/TextLink";
import parse from "html-react-parser";

import * as s from "./countries_list.css";
import * as w from "@/styles/whole.css";

interface Props {
  name: string;
}

export async function CountriesList(p: Props) {
  const content: Detail = await getCountryDetail(p.name);
  return (
    <div className={clsx(s.map_wrapper)}>
      <div className={clsx(s.content_wrapper, s.content_body)}>
        <div>
          <Image
            src={content.country_flag_image.url}
            alt="flag"
            height={content.country_flag_image.height}
            width={content.country_flag_image.width}
            sizes="100vw"
            className={clsx(s.flag_image, w.borderRadiusMd)}
            priority={false}
          />
          <h1 className={clsx(s.country_name)}>{content.country_name_jp}</h1>
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
    </div>
  );
}
