import { prisma } from "@/lib/prisma";

export async function hasShared(
  userId: string,
  postId: string
) {
  return prisma.share.findUnique({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });
}

export async function sharePost(
  userId: string,
  postId: string
) {
  return prisma.share.create({
    data: {
      userId,
      postId,
    },
  });
}

export async function unsharePost(
  userId: string,
  postId: string
) {
  return prisma.share.delete({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });
}