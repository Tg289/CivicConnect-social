import { prisma } from "@/lib/prisma";


export async function isFollowing(
  followerId: string,
  followingId: string
) {
  const follow = await prisma.follow.findUnique({
    where: {
      followerId_followingId: {
        followerId,
        followingId,
      },
    },
  });

  return Boolean(follow);
}


export async function followUser(
  followerId: string,
  followingId: string
) {
  if (followerId === followingId) {
    throw new Error(
      "You cannot follow yourself."
    );
  }

  const follow = await prisma.follow.create({
    data: {
      followerId,
      followingId,
    },
  });


  await prisma.notification.create({
    data: {
      userId: followingId,
      type: "FOLLOW",
      message:
        "Someone started following you.",
    },
  });


  return follow;
}


export async function unfollowUser(
  followerId: string,
  followingId: string
) {
  return prisma.follow.delete({
    where: {
      followerId_followingId: {
        followerId,
        followingId,
      },
    },
  });
}