"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {

  const router = useRouter();

  const [query, setQuery] = useState("");


  function handleSearch(
    e: React.FormEvent
  ) {

    e.preventDefault();

    if (!query.trim()) return;


    router.push(
      `/search?q=${encodeURIComponent(query)}`
    );

  }


  return (

    <form
      onSubmit={handleSearch}
      className="w-full"
    >

      <div
        className="
          flex
          items-center
          rounded-2xl
          border
          bg-white
          p-2
          shadow-sm
          focus-within:ring-2
          focus-within:ring-black
        "
      >

        <input

          value={query}

          onChange={(e)=>
            setQuery(e.target.value)
          }

          placeholder="Search users, posts..."

          className="
            flex-1
            rounded-xl
            px-4
            py-3
            outline-none
          "

        />


        <button
          type="submit"
          className="
            rounded-xl
            bg-black
            px-5
            py-3
            text-white
            hover:opacity-90
          "
        >
          Search
        </button>


      </div>


    </form>

  );
}