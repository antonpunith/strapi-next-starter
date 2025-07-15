// lib/globalData.ts
import { cache } from "react";
import { fetchFromStrapi } from "@/lib/strapi/fetchFromStrapi";

export const getGlobalData = cache(async () => {
  return await fetchFromStrapi("global", {
    header: { populate: "*" },
    footer: { populate: "*" },
  });
});

