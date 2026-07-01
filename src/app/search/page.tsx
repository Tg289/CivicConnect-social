import SearchBar from "@/components/search/SearchBar";
import UserCard from "@/components/search/UserCard";
import SearchPostCard from "@/components/search/SearchPostCard";

import {
  searchUsers,
  searchPosts,
} from "@/services/search/search.service";


interface Props {

  searchParams:
  Promise<{
    q?: string;
  }>;

}



export default async function SearchPage({
  searchParams,
}: Props) {


  const params =
    await searchParams;


  const query =
    params.q?.trim() ?? "";



  const users =
    query
      ? await searchUsers(query)
      : [];



  const posts =
    query
      ? await searchPosts(query)
      : [];



  return (

    <main
      className="
        mx-auto
        max-w-4xl
        space-y-8
        p-6
      "
    >


      <div>

        <h1
          className="
            text-3xl
            font-bold
          "
        >
          Search
        </h1>

        <p
          className="
            mt-2
            text-gray-500
          "
        >
          Find people and posts on CivicConnect
        </p>

      </div>



      <SearchBar />



      {
        query && (

          <p className="text-sm text-gray-500">

            Showing results for:

            {" "}

            <span className="font-semibold text-black">
              {query}
            </span>

          </p>

        )
      }



      {
        query &&
        users.length === 0 &&
        posts.length === 0 && (

          <div
            className="
              rounded-xl
              border
              bg-white
              p-10
              text-center
            "
          >

            <h2 className="font-semibold">
              No results found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Try searching with another keyword.
            </p>


          </div>

        )
      }




      {
        users.length > 0 && (

          <section className="space-y-4">

            <h2 className="text-xl font-bold">
              People
            </h2>


            {
              users.map((user)=>(

                <UserCard
                  key={user.id}
                  user={user}
                />

              ))
            }


          </section>

        )
      }





      {
        posts.length > 0 && (

          <section className="space-y-4">


            <h2 className="text-xl font-bold">
              Posts
            </h2>


            {
              posts.map((post)=>(

                <SearchPostCard
                  key={post.id}
                  post={post}
                />

              ))
            }


          </section>

        )
      }



    </main>

  );

}