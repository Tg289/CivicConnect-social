"use server";

import { auth } from "@/lib/auth/auth";

import {
  hasLiked,
  likePost,
  unlikePost,
} from "@/services/likes/like.service";


export async function toggleLikeAction(
  postId: string,
  authorId: string
) {

  const session =
    await auth();


  if (!session?.user?.id) {
    throw new Error(
      "Unauthorized"
    );
  }


  const userId =
    session.user.id;


  const liked =
    await hasLiked(
      userId,
      postId
    );


  if (liked) {

    await unlikePost(
      userId,
      postId
    );

  } else {

    await likePost(
      userId,
      postId,
      authorId
    );

  }


  return {
    liked: !liked,
  };
}