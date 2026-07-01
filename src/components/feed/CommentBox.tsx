"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { addCommentAction } from "@/actions/comment";

interface Props {
  postId: string;
  postAuthorId: string;
}

export default function CommentBox({
  postId,
  postAuthorId,
}: Props) {
  const router = useRouter();

  const [content, setContent] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function submit() {
    if (!content.trim()) return;

    setLoading(true);

    try {
      await addCommentAction(
        postId,
        postAuthorId,
        content
      );

      setContent("");

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Unable to post comment.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">

      <textarea
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
        placeholder="Write a comment..."
        className="w-full rounded-lg border p-3"
      />

      <Button
        onClick={submit}
        disabled={
          loading ||
          !content.trim()
        }
      >
        {loading
          ? "Posting..."
          : "Comment"}
      </Button>

    </div>
  );
}