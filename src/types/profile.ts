export interface ProfileData {
  id: string;

  userId: string;

  username: string;

  name: string;

  email: string;

  bio: string | null;

  location: string | null;

  website: string | null;

  avatar: string | null;

  coverImage: string | null;

  createdAt: Date;

  updatedAt: Date;
}

export interface ProfileStats {
  posts: number;

  followers: number;

  following: number;

  likes: number;
}

export interface ProfileResponse {
  profile: ProfileData;
  stats: ProfileStats;
}