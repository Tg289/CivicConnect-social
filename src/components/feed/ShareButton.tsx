"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import {
  toggleShareAction,
} from "@/actions/share";

interface Props {
  postId: string;
  initialShared: boolean;
  initialCount: number;
}

export default function ShareButton({
  postId,
  initialShared,
  initialCount,
}: Props) {

  const [shared, setShared] =
    useState(initialShared);

  const [count, setCount] =
    useState(initialCount);

  const [loading, setLoading] =
    useState(false);

  async function handleShare() {
    if (loading) return;

    setLoading(true);

    try {
      const result =
        await toggleShareAction(postId);

      setShared(result.shared);

      setCount((prev) =>
        result.shared
          ? prev + 1
          : prev - 1
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      onClick={handleShare}
      disabled={loading}
    >
      🔁 {count}
    </Button>
  );
}