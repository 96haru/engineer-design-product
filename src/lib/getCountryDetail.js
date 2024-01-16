"use server";

import { client } from "@/lib/client";

export const getCountryDetail = async (name) => {
  try {
    const country = await client.get({
      endpoint: "map",
      contentId: name,
      customRequestInit: {
        next: { revalidate: 120 }
      }
    });
    return country;
  } catch (error) {
    console.log("get error");
    return "error"
  }
};
