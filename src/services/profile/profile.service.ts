import { prisma } from "@/lib/prisma";

import { ProfileInput } from "@/lib/validations/profile/profile-schema";

export async function getProfileByUsername(username: string) {
  return prisma.profile.findUnique({
    where: {
      username,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
          createdAt: true,
        },
      },
    },
  });
}

export async function getProfileByUserId(userId: string) {
  return prisma.profile.findUnique({
    where: {
      userId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
          createdAt: true,
        },
      },
    },
  });
}

export async function usernameExists(
  username: string,
  currentUserId?: string
) {
  const profile = await prisma.profile.findFirst({
    where: {
      username,
      ...(currentUserId && {
        NOT: {
          userId: currentUserId,
        },
      }),
    },
  });

  return !!profile;
}

export async function updateProfile(
  userId: string,
  data: ProfileInput
) {
  return prisma.profile.update({
    where: {
      userId,
    },
    data: {
      username: data.username,
      bio: data.bio,
      location: data.location,
      website: data.website,
      avatar: data.avatar,
      coverImage: data.coverImage,

      user: {
        update: {
          name: data.name,
        },
      },
    },
    include: {
      user: true,
    },
  });
}

export async function getProfileStats(userId: string) {
  const [posts, followers, following, likes] =
    await prisma.$transaction([
      prisma.post.count({
        where: {
          authorId: userId,
        },
      }),

      prisma.follow.count({
        where: {
          followingId: userId,
        },
      }),

      prisma.follow.count({
        where: {
          followerId: userId,
        },
      }),

      prisma.like.count({
        where: {
          post: {
            authorId: userId,
          },
        },
      }),
    ]);

  return {
    posts,
    followers,
    following,
    likes,
  };
}