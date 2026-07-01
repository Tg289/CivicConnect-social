"use server";

import { revalidatePath } from "next/cache";

import { auth } from "@/lib/auth/auth";

import {
  PostSchema,
} from "@/lib/validations/posts/post-schema";

import {
  createPost,
  deletePost,
  updatePost,
} from "@/services/posts/post.service";

export async function createPostAction(
  values: unknown
) {
  const session =
    await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const parsed =
    PostSchema.safeParse(values);

  if (!parsed.success) {
    throw new Error(
      parsed.error.issues[0]?.message ??
        "Invalid post data"
    );
  }

  const post =
    await createPost(
      session.user.id,
      parsed.data
    );

  revalidatePath("/feed");

  return post;
}

export async function deletePostAction(
  postId: string
) {
  const session =
    await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  await deletePost(
    postId,
    session.user.id
  );

  revalidatePath("/feed");
}

export async function updatePostAction(
  postId: string,
  content: string
) {
  const session =
    await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  if (!content.trim()) {
    throw new Error(
      "Content cannot be empty."
    );
  }

  await updatePost(
    postId,
    session.user.id,
    content.trim()
  );

  revalidatePath("/feed");
}