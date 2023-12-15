"use server";

import { client } from "@/lib/client";

export const getCountry = async (name) => {
  try {
    const country = await client.get({
      endpoint: "map",
      contentId: name,
    });
    return country;
  } catch (error) {
    console.log("get error");
    return "error"
  }
};
