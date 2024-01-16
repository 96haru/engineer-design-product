"use server";

import { client } from "@/lib/client";

export const getCountries = async (limit = 10, offset = 0) => {
  const data = await client.get({
    endpoint: `map`,
    queries: {
      offset,
      limit
    },
    customRequestInit: {
      next: {
        revalidate: 120
      }
    }
  })

  if (data.offset + data.limit < data.totalCount) {
    const contents = await getCountries(data.limit, data.offset + data.limit)
    return [...data.contents, ...contents]
  }

  return data.contents
}