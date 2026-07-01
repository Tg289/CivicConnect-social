import Link from "next/link";


interface Props {

  post: {
    id: string;
    content: string;

    author: {
      name: string | null;

      profile: {
        username: string;
      } | null;
    };

    _count: {
      likes: number;
      comments: number;
    };
  };

}


export default function SearchPostCard({
  post,
}: Props) {

  return (

    <div
      className="
        rounded-xl
        border
        bg-white
        p-5
        shadow-sm
      "
    >

      <Link
        href={
          `/profile/${
            post.author.profile?.username
          }`
        }
        className="font-semibold"
      >
        {
          post.author.name ??
          post.author.profile?.username
        }
      </Link>


      <p
        className="
          mt-3
          whitespace-pre-wrap
        "
      >
        {post.content}
      </p>


      <div
        className="
          mt-4
          flex
          gap-5
          text-sm
          text-gray-500
        "
      >

        <span>
          {post._count.likes} Likes
        </span>


        <span>
          {post._count.comments} Comments
        </span>

      </div>

    </div>

  );
}