"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import {
  deletePostAction,
} from "@/actions/posts/post";

interface Props {
  postId: string;
}

export default function PostActions({
  postId,
}: Props) {
  const router = useRouter();

  const [pending, startTransition] =
    useTransition();

  function handleDelete() {
    const confirmed = window.confirm(
      "Delete this post?"
    );

    if (!confirmed) return;

    startTransition(async () => {
      try {
        await deletePostAction(postId);

        router.refresh();
      } catch (error) {
        console.error(error);
        alert("Unable to delete post.");
      }
    });
  }

  return (
    <Button
      onClick={handleDelete}
      disabled={pending}
      className="bg-red-600 hover:bg-red-700"
    >
      {pending ? "Deleting..." : "Delete"}
    </Button>
  );
}