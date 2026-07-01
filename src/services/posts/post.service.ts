import { prisma } from "@/lib/prisma";

import {
  PostInput,
} from "@/lib/validations/posts/post-schema";

export async function createPost(
  userId: string,
  data: PostInput
) {
  return prisma.post.create({
    data: {
      content: data.content,

      imageUrl:
        data.imageUrl || null,

      videoUrl:
        data.videoUrl || null,

      authorId: userId,
    },

    include: {
      author: {
        include: {
          profile: true,
        },
      },

      _count: {
        select: {
          likes: true,
          comments: true,
        },
      },
    },
  });
}

export async function getFeedPosts() {
  return prisma.post.findMany({
  take: 20,
    orderBy: {
      createdAt: "desc",
    },

    include: {
      author: {
        include: {
          profile: true,
        },
      },

      _count: {
        select: {
          likes: true,
          comments: true,
        },
      },
    },
  });
}

export async function getPostsByUserId(
  userId: string
) {
  return prisma.post.findMany({
    where: {
      authorId: userId,
    },

    orderBy: {
      createdAt: "desc",
    },

    include: {
      author: {
        include: {
          profile: true,
        },
      },

      _count: {
        select: {
          likes: true,
          comments: true,
        },
      },
    },
  });
}

export async function deletePost(
  postId: string,
  userId: string
) {
  const post =
    await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

  if (!post) {
    throw new Error("Post not found.");
  }

  if (post.authorId !== userId) {
    throw new Error("Unauthorized.");
  }

  return prisma.post.delete({
    where: {
      id: postId,
    },
  });
}

export async function updatePost(
  postId: string,
  userId: string,
  content: string
) {
  const post =
    await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

  if (!post) {
    throw new Error("Post not found.");
  }

  if (post.authorId !== userId) {
    throw new Error("Unauthorized.");
  }

  return prisma.post.update({
    where: {
      id: postId,
    },

    data: {
      content,
    },
  });
}