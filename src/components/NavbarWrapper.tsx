import { auth } from "@/lib/auth/auth";

import { getProfileByUserId } from "@/services/profile/profile.service";

import Navbar from "./Navbar";

export default async function NavbarWrapper() {
  const session = await auth();

  if (!session?.user?.id) {
    return null;
  }

  const profile =
    await getProfileByUserId(
      session.user.id
    );

  if (!profile) {
    return null;
  }

  return (
    <Navbar
      username={profile.username}
    />
  );
}