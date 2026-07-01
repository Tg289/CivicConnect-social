import { ProfileData, ProfileStats } from "@/types/profile";

import ProfileHeader from "./ProfileHeader";
import ProfileStatsComponent from "./ProfileStats";
import FollowButton from "./FollowButton";

interface ProfileCardProps {
  profile: ProfileData;

  stats: ProfileStats;

  viewerId?: string;

  isFollowing?: boolean;

  isOwnProfile?: boolean;
}

export default function ProfileCard({
  profile,
  stats,
  viewerId,
  isFollowing = false,
  isOwnProfile,
}: ProfileCardProps) {
  const ownProfile =
    isOwnProfile ??
    viewerId === profile.userId;

  return (
    <div className="space-y-6">

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

        <ProfileHeader
          profile={profile}
        />

        <div className="flex justify-end border-t p-5">

          {ownProfile ? (
            <a
              href="/profile/edit"
              className="rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-gray-100"
            >
              Edit Profile
            </a>
          ) : (
            <FollowButton
              userId={profile.userId}
              username={profile.username}
              initialFollowing={isFollowing}
            />
          )}

        </div>

      </div>


      <ProfileStatsComponent
        stats={stats}
      />

    </div>
  );
}