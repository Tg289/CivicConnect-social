import Image from "next/image";
import { MapPin, Link as LinkIcon } from "lucide-react";

import { ProfileData } from "@/types/profile";

interface ProfileHeaderProps {
  profile: ProfileData;
}

export default function ProfileHeader({
  profile,
}: ProfileHeaderProps) {
  const fallbackAvatar = "/images/default-avatar.png";
  const fallbackCover = "/images/default-cover.png";

  return (
    <section className="overflow-hidden rounded-xl border bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      {/* Cover */}
      <div className="relative h-48 w-full sm:h-64">
        <Image
          src={profile.coverImage || fallbackCover}
          alt={`${profile.username} cover image`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Profile Information */}
      <div className="relative px-4 pb-6 sm:px-6">
        {/* Avatar */}
        <div className="absolute -top-16 left-4 h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-zinc-200 dark:border-zinc-900 dark:bg-zinc-800 sm:left-6">
          <Image
            src={profile.avatar || fallbackAvatar}
            alt={`${profile.username} avatar`}
            fill
            sizes="128px"
            className="object-cover"
          />
        </div>

        <div className="pt-20">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            {profile.name || profile.username}
          </h1>

          <p className="text-sm text-zinc-500">
            @{profile.username}
          </p>

          {profile.bio && (
            <p className="mt-4 max-w-2xl whitespace-pre-wrap text-sm text-zinc-700 dark:text-zinc-300 sm:text-base">
              {profile.bio}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-500">
            {profile.location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{profile.location}</span>
              </div>
            )}

            {profile.website && (
              <div className="flex items-center gap-1">
                <LinkIcon className="h-4 w-4" />

                <a
                  href={
                    profile.website.startsWith("http")
                      ? profile.website
                      : `https://${profile.website}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  {profile.website.replace(
                    /https?:\/\/(www\.)?/,
                    ""
                  )}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}