"use server";

import {
  searchAll,
} from "@/services/search/search.service";


export async function searchAction(
  query: string
) {

  if (!query.trim()) {

    return {
      users: [],
      posts: [],
    };

  }


  return searchAll(
    query.trim()
  );

}