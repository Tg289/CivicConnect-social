import Image from "next/image";
import Link from "next/link";


interface Props {
  user: {
    id: string;
    name: string | null;
    image: string | null;
    profile: {
      username: string;
      avatar: string | null;
    } | null;
  };
}


export default function UserCard({
  user,
}: Props) {

  return (
    <Link
      href={
        `/profile/${
          user.profile?.username
        }`
      }
      className="
        flex
        items-center
        gap-4
        rounded-xl
        border
        p-4
        hover:bg-gray-50
        transition
      "
    >

      <div
        className="
          relative
          h-12
          w-12
          overflow-hidden
          rounded-full
          bg-gray-200
        "
      >

        {(user.profile?.avatar ||
          user.image) && (

          <Image
            src={
              user.profile?.avatar ??
              user.image ??
              ""
            }
            alt="avatar"
            fill
            className="object-cover"
          />

        )}

      </div>


      <div>

        <p className="font-semibold">
          {
            user.name ??
            user.profile?.username
          }
        </p>


        <p className="text-sm text-gray-500">
          @
          {
            user.profile?.username
          }
        </p>

      </div>


    </Link>
  );
}