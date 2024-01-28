import type {
  MicroCMSQueries,
  MicroCMSDate,
  MicroCMSImage,
} from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";
import { client } from "./client";

// if (!process.env.SERVICE_DOMAIN) {
//   throw new Error("MICROCMS_SERVICE_DOMAIN is required");
// }

// if (!process.env.API_KEY) {
//   throw new Error("MICROCMS_API_KEY is required");
// }

// export const client = createClient({
//   serviceDomain: process.env.SERVICE_DOMAIN,
//   apiKey: process.env.API_KEY,
// });

export type Countries = {
  id: string;
  title: string;
  content: string;
  country_flag_image?: MicroCMSImage;
  country_name_jp: string;
} & MicroCMSDate;

export type Detail = {
  country_flag_image: MicroCMSImage;
  country_name_jp: string;
  country_region: string;
  country_population: string;
  population_year: string;
  country_body: string;
};

export const getCountries = async (queries?: MicroCMSQueries) => {
  const data = await client.getAllContents<Countries>({
    endpoint: "map",
    customRequestInit: {
      next: {
        revalidate: 120,
      },
    },
    queries,
  });

  // データを五十音順にソートする
  const sortedData = data.sort((a, b) => {
    // aとbはCountries型のオブジェクトと仮定
    const nameA = a.country_name_jp.toLowerCase();  // 小文字に変換して比較
    const nameB = b.country_name_jp.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return sortedData;
};


export const getCountryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const data = await client.getListDetail<Detail>({
    endpoint: "map",
    contentId,
    customRequestInit: {
      next: { revalidate: 120 },
    },
    queries,
  });

  return data;
};