"use client";

import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";

import { updatePostAction } from "@/actions/posts/post";

interface Props {
  postId: string;
  initialContent: string;
}

export default function EditPostButton({
  postId,
  initialContent,
}: Props) {
  const [editing, setEditing] =
    useState(false);

  const [content, setContent] =
    useState(initialContent);

  const [pending, startTransition] =
    useTransition();

  function save() {
    if (!content.trim()) return;

    startTransition(async () => {
      await updatePostAction(
        postId,
        content
      );

      setEditing(false);
    });
  }

  if (editing) {
    return (
      <div className="space-y-2">

        <textarea
          className="w-full rounded-md border p-2"
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
        />

        <div className="flex gap-2">

          <Button
            onClick={save}
            disabled={pending}
          >
            Save
          </Button>

          <Button
            onClick={() => {
              setEditing(false);
              setContent(initialContent);
            }}
          >
            Cancel
          </Button>

        </div>

      </div>
    );
  }

  return (
    <Button
      onClick={() => setEditing(true)}
    >
      Edit
    </Button>
  );
}