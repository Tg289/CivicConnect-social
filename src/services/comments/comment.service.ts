import { prisma } from "@/lib/prisma";

export async function createComment(
  userId: string,
  postId: string,
  content: string,
  postAuthorId: string
) {
  const comment = await prisma.comment.create({
    data: {
      authorId: userId,
      postId,
      content,
    },
    include: {
      author: {
        include: {
          profile: true,
        },
      },
    },
  });

  if (userId !== postAuthorId) {
    await prisma.notification.create({
      data: {
        userId: postAuthorId,
        type: "COMMENT",
        message: "Someone commented on your post.",
      },
    });
  }

  return comment;
}

export async function getPostComments(postId: string) {
  return prisma.comment.findMany({
    where: {
      postId,
    },
    
     take: 3,
    
    orderBy: {
      createdAt: "desc",
    },

    include: {
      author: {
        include: {
          profile: {
            select: {
              username: true,
              avatar: true,
            },
          },
        },
      },
    },
  });
}

export async function deleteComment(
  commentId: string,
  userId: string
) {
  const comment = await prisma.comment.findUnique({
    where: {
      id: commentId,
    },
    select: {
      id: true,
      authorId: true,
    },
  });

  if (!comment) {
    throw new Error("Comment not found.");
  }

  if (comment.authorId !== userId) {
    throw new Error("Unauthorized");
  }

  await prisma.comment.delete({
    where: {
      id: commentId,
    },
  });

  return {
    success: true,
  };
}