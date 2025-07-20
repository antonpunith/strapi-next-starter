// lib/globalData.ts
import { cache } from "react";
import { fetchGraphql } from "@/lib/strapi/fetchGraphql";
import { GET_GLOBAL } from "@/lib/strapi/queries/global";

export const getGlobalData = cache(async () => {
  const response = await fetchGraphql(GET_GLOBAL);
  return response?.global || {};
});
