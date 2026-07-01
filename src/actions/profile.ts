"use server";

import { revalidatePath } from "next/cache";

import { auth } from "@/lib/auth/auth";
import { ProfileSchema } from "@/lib/validations/profile/profile-schema";
import { updateProfile } from "@/services/profile/profile.service";

export async function updateProfileAction(values: unknown) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const parsed = ProfileSchema.safeParse(values);

  if (!parsed.success) {
    throw new Error(parsed.error.issues[0]?.message ?? "Invalid profile data");
  }

  const profile = await updateProfile(
    session.user.id,
    parsed.data
  );

  revalidatePath(`/profile/${profile.username}`);
  revalidatePath("/profile");

  return profile;
}