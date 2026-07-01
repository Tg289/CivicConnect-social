import Image from "next/image";
import {
  getPostComments,
} from "@/services/comments/comment.service";
interface Props {
  postId: string;
}
export default async function CommentList({
  postId,
}: Props) {
  const comments =
    await getPostComments(postId);
  if (!comments.length) {
    return (
      <p className="text-sm text-gray-500">
        No comments yet.
      </p>
    );
  }
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex gap-3 rounded-lg border p-3"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-200">
            {comment.author.image && (
              <Image
                src={comment.author.image}
                alt={
                  comment.author.name ??
                  "User"
                }
                fill
                className="object-cover"
              />
            )}
          </div>
          <div>
            <p className="font-medium">
              {
                comment.author.name ??
                "User"
              }
            </p>
            <p className="text-sm text-gray-700">
              {comment.content}
            </p>
            <p className="mt-1 text-xs text-gray-400">
              {
                new Date(
                  comment.createdAt
                ).toLocaleDateString()
              }
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}