import { prisma } from "@/lib/prisma";


export async function hasLiked(
  userId: string,
  postId: string
) {
  const like =
    await prisma.like.findUnique({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
    });


  return Boolean(like);
}



export async function likePost(
  userId: string,
  postId: string,
  authorId: string
) {

  const like =
    await prisma.like.create({
      data: {
        userId,
        postId,
      },
    });


  if (userId !== authorId) {

    await prisma.notification.create({
      data: {
        userId: authorId,
        type: "LIKE",
        message:
          "Someone liked your post.",
      },
    });

  }


  return like;
}



export async function unlikePost(
  userId: string,
  postId: string
) {

  return prisma.like.delete({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });

}