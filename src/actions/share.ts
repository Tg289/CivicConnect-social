"use server";

import { auth } from "@/lib/auth/auth";

import {
  hasShared,
  sharePost,
  unsharePost,
} from "@/services/shares/share.service";

export async function toggleShareAction(
  postId: string
) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const userId = session.user.id;

  const exists = await hasShared(
    userId,
    postId
  );

  if (exists) {
    await unsharePost(
      userId,
      postId
    );

    return {
      shared: false,
    };
  }

  await sharePost(
    userId,
    postId
  );

  return {
    shared: true,
  };
}