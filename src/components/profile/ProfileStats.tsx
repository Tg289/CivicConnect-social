import { ProfileStats as ProfileStatsType } from "@/types/profile";

interface ProfileStatsProps {
  stats: ProfileStatsType;
}

export default function ProfileStats({
  stats,
}: ProfileStatsProps) {
  const items = [
    {
      label: "Posts",
      value: stats.posts,
    },
    {
      label: "Followers",
      value: stats.followers,
    },
    {
      label: "Following",
      value: stats.following,
    },
    {
      label: "Likes",
      value: stats.likes,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 rounded-xl border bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center"
        >
          <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            {item.value}
          </span>

          <span className="text-sm text-zinc-500">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}