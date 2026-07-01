"use client";

import { useTransition } from "react";

import { Button } from "@/components/ui/button";

import { deletePostAction } from "@/actions/posts/post";

interface Props {
  postId: string;
}

export default function DeletePostButton({
  postId,
}: Props) {
  const [pending, startTransition] =
    useTransition();

  function handleDelete() {
    const confirmed = window.confirm(
      "Delete this post?"
    );

    if (!confirmed) return;

    startTransition(async () => {
      await deletePostAction(postId);
    });
  }

  return (
    <Button
      onClick={handleDelete}
      disabled={pending}
      className="bg-red-600 hover:bg-red-700"
    >
      {pending
        ? "Deleting..."
        : "Delete"}
    </Button>
  );
}