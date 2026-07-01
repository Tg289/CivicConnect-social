"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import {
  toggleLikeAction,
} from "@/actions/like";

interface Props {

  postId: string;

  authorId: string;

  initialLiked: boolean;

  initialCount: number;

}

export default function LikeButton({

  postId,

  authorId,

  initialLiked,

  initialCount,

}: Props) {

  const [liked, setLiked] =
    useState(initialLiked);

  const [count, setCount] =
    useState(initialCount);

  const [loading, setLoading] =
    useState(false);

  async function handleLike() {

    if (loading) return;

    setLoading(true);

    try {

      const result =
        await toggleLikeAction(
          postId,
          authorId
        );

      setLiked(result.liked);

      setCount((prev) =>
        result.liked
          ? prev + 1
          : prev - 1
      );

    } finally {

      setLoading(false);

    }

  }

  return (

    <Button

      variant={
        liked
          ? "default"
          : "outline"
      }

      onClick={handleLike}

      disabled={loading}

    >

      {liked ? "❤️" : "🤍"}

      {" "}

      {count}

    </Button>

  );

}