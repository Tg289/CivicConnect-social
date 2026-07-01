import { redirect } from "next/navigation";

import { auth } from "@/lib/auth/auth";

import {
  getFeedPosts,
} from "@/services/posts/post.service";

import CreatePost from "@/components/feed/CreatePost";
import PostCard from "@/components/feed/PostCard";

export default async function FeedPage() {

  const session =
    await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const posts =
    await getFeedPosts();

  return (

    <main
      className="
        min-h-screen
        bg-gradient-to-br
        from-pink-50
        via-white
        to-purple-50
      "
    >

      <div
        className="
          mx-auto
          max-w-3xl
          px-5
          py-8
        "
      >

        {/* Header */}

        <div
          className="
            mb-8
            rounded-3xl
            bg-gradient-to-r
            from-pink-500
            via-purple-500
            to-indigo-500
            p-8
            text-white
            shadow-xl
          "
        >

          <h1
            className="
              text-4xl
              font-black
            "
          >
            CivicConnect
          </h1>

          <p
            className="
              mt-2
              text-white/90
            "
          >
            Share ideas, connect with your community and stay updated.
          </p>

        </div>

        {/* Create Post */}

        <div className="mb-8">
          <CreatePost />
        </div>

        {/* Posts */}

        <section
          className="
            space-y-6
          "
        >

          {
            posts.length === 0 ? (

              <div
                className="
                  rounded-3xl
                  border
                  bg-white
                  p-12
                  text-center
                  shadow-sm
                "
              >

                <h2
                  className="
                    text-xl
                    font-bold
                  "
                >
                  No posts yet
                </h2>

                <p
                  className="
                    mt-3
                    text-gray-500
                  "
                >
                  Be the first person to create a post.
                </p>

              </div>

            ) : (

              posts.map((post) => (

                <PostCard
                  key={post.id}
                  post={post}
                  currentUserId={
                    session.user.id
                  }
                />

              ))

            )
          }

        </section>

      </div>

    </main>

  );

}