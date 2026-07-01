import { redirect } from "next/navigation";

import { auth } from "@/lib/auth/auth";

import {
  getProfileByUserId,
} from "@/services/profile/profile.service";

import EditProfileDialog from "@/components/profile/EditProfileDialog";

export default async function EditProfilePage() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const profile = await getProfileByUserId(
    session.user.id
  );

  if (!profile) {
    redirect("/profile");
  }

  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Edit Profile
      </h1>

      <EditProfileDialog
        defaultValues={{
          username: profile.username,
          name: profile.user.name ?? "",
          bio: profile.bio ?? "",
          location: profile.location ?? "",
          website: profile.website ?? "",
          avatar: profile.avatar ?? "",
          coverImage: profile.coverImage ?? "",
        }}
      />
    </main>
  );
}