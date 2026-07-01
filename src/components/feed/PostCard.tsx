import Image from "next/image";
import LikeButton from "./LikeButton";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";


type PostCardProps = {

  post: {

    id: string;

    content: string;

    imageUrl: string | null;

    createdAt: Date;


    author: {

      id: string;

      name: string | null;

      profile: {

        username: string;

        avatar: string | null;

      } | null;

    };


    _count: {

      likes: number;

      comments: number;

    };

  };


  currentUserId?: string;

};



export default function PostCard({

  post,

  currentUserId,

}: PostCardProps) {


  return (

    <article
      className="
        rounded-3xl
        border
        bg-white
        p-6
        shadow-sm
        hover:shadow-xl
        transition
      "
    >


      {/* Header */}

      <div
        className="
          flex
          items-center
          gap-4
        "
      >


        <div
          className="
            relative
            h-14
            w-14
            overflow-hidden
            rounded-full
            bg-gradient-to-br
            from-pink-400
            to-purple-500
            p-[2px]
          "
        >

          <div
            className="
              relative
              h-full
              w-full
              overflow-hidden
              rounded-full
              bg-white
            "
          >

            {
              post.author.profile?.avatar && (

                <Image

                  src={
                    post.author.profile.avatar
                  }

                  alt="avatar"

                  fill

                  className="object-cover"

                />

              )
            }

          </div>

        </div>



        <div>

          <p
            className="
              font-bold
            "
          >
            {
              post.author.name ??
              post.author.profile?.username
            }

          </p>


          <p
            className="
              text-sm
              text-gray-500
            "
          >

            @
            {
              post.author.profile?.username
            }

          </p>


        </div>


      </div>



      {/* Content */}

      <p
        className="
          mt-5
          whitespace-pre-wrap
          leading-relaxed
          text-gray-800
        "
      >

        {post.content}

      </p>



      {/* Image */}

      {
        post.imageUrl && (

          <div
            className="
              relative
              mt-5
              aspect-video
              overflow-hidden
              rounded-2xl
            "
          >

            <Image

              src={post.imageUrl}

              alt="post"

              fill

              className="
                object-cover
              "

            />

          </div>

        )
      }



      {/* Actions */}

      <div
        className="
          mt-5
          flex
          items-center
          gap-4
        "
      >

        <LikeButton

          postId={post.id}

          authorId={post.author.id}

          initialLiked={false}

          initialCount={
            post._count.likes
          }

        />


      </div>



      {/* Comments */}

      <div
        className="
          mt-6
          space-y-5
        "
      >

        {
          currentUserId && (

            <CommentBox

              postId={post.id}

              postAuthorId={
                post.author.id
              }

            />

          )
        }


        <CommentList

          postId={post.id}

        />


      </div>


    </article>

  );

}