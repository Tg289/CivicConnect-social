import { redirect } from "next/navigation";

import { auth } from "@/lib/auth/auth";
import {
  getProfileByUserId,
  getProfileStats,
} from "@/services/profile/profile.service";

import ProfileCard from "@/components/profile/ProfileCard";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const profile = await getProfileByUserId(
    session.user.id
  );

  if (!profile) {
    redirect("/");
  }

  const stats = await getProfileStats(
    profile.userId
  );

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
    <main className="mx-auto max-w-6xl p-6">
      <ProfileCard
        profile={profileData}
        stats={stats}
        isOwnProfile
      />
    </main>
  );
}