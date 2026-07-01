"use server";

import { revalidatePath } from "next/cache";

import { auth } from "@/lib/auth/auth";

import {
  isFollowing,
  followUser,
  unfollowUser,
} from "@/services/follow/follow.service";


export async function toggleFollowAction(
  targetUserId: string,
  username: string
) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }


  const currentUserId =
    session.user.id;


  const following =
    await isFollowing(
      currentUserId,
      targetUserId
    );


  if (following) {
    await unfollowUser(
      currentUserId,
      targetUserId
    );
  } else {
    await followUser(
      currentUserId,
      targetUserId
    );
  }


  revalidatePath(
    `/profile/${username}`
  );


  return {
    following: !following,
  };
}