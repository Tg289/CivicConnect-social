import { Prisma } from "@prisma/client";

import {
  ProfileResponse,
  ProfileStats,
} from "@/types/profile";

type ProfileWithUser = Prisma.ProfileGetPayload<{
  include: {
    user: true;
  };
}>;

export function toProfileResponse(
  profile: ProfileWithUser,
  stats: ProfileStats
): ProfileResponse {
  return {
    profile: {
      id: profile.id,
      userId: profile.userId,
      username: profile.username,
      name: profile.user.name ?? "",
      email: profile.user.email,
      bio: profile.bio,
      location: profile.location,
      website: profile.website,
      avatar: profile.avatar,
      coverImage: profile.coverImage,
      createdAt: profile.createdAt,
      updatedAt: profile.updatedAt,
    },

    stats,
  };
}