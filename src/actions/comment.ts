"use server";

import { revalidatePath } from "next/cache";

import { auth } from "@/lib/auth/auth";

import {
  createComment,
  deleteComment,
} from "@/services/comments/comment.service";

export async function addCommentAction(
  postId: string,
  postAuthorId: string,
  content: string
) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const trimmedContent = content.trim();

  if (!trimmedContent) {
    throw new Error("Comment cannot be empty.");
  }

  const comment = await createComment(
    session.user.id,
    postId,
    trimmedContent,
    postAuthorId
  );

  revalidatePath("/feed");

  return comment;
}

export async function deleteCommentAction(
  commentId: string
) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  await deleteComment(
    commentId,
    session.user.id
  );

  revalidatePath("/feed");

  return {
    success: true,
  };
}