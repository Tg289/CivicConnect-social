import { notFound } from "next/navigation";

import { auth } from "@/lib/auth/auth";

import ProfileCard from "@/components/profile/ProfileCard";
import PostCard from "@/components/feed/PostCard";

import {
  getProfileByUsername,
  getProfileStats,
} from "@/services/profile/profile.service";

import {
  getPostsByUserId,
} from "@/services/posts/post.service";

type Props = {
  params: Promise<{
    username: string;
  }>;
};

export default async function UserProfilePage({
  params,
}: Props) {
  const session = await auth();

  const { username } = await params;

  const profile =
    await getProfileByUsername(username);

  if (!profile) {
    notFound();
  }

  const stats =
    await getProfileStats(profile.userId);

  const posts =
    await getPostsByUserId(profile.userId);

  const profileData = {
    id: profile.id,
    userId: profile.userId,
    username: profile.username,
    name: profile.user.name ?? "",
    email: profile.user.email,
    bio: profile.bio,
    location: profile.location,
    website: profile.website,
    avatar: profile.avatar,
    coverImage: profile.coverImage,
    createdAt: profile.createdAt,
    updatedAt: profile.updatedAt,
  };

  return (
    <main className="mx-auto max-w-4xl space-y-6 p-6">

      <ProfileCard
        profile={profileData}
        stats={stats}
        isOwnProfile={
          session?.user?.id === profile.userId
        }
      />

      <section>

        <h2 className="mb-4 text-2xl font-bold">
          Posts
        </h2>

        {posts.length === 0 ? (

          <div className="rounded-xl border p-6 text-center text-gray-500">
            No posts yet.
          </div>

        ) : (

          <div className="space-y-5">

            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                currentUserId={
                  session?.user?.id ?? ""
                }
              />
            ))}

          </div>

        )}

      </section>

    </main>
  );
}