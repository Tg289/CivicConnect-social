"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import {
  toggleFollowAction,
} from "@/actions/follow";


interface Props {
  userId: string;

  username: string;

  initialFollowing: boolean;
}


export default function FollowButton({
  userId,
  username,
  initialFollowing,
}: Props) {

  const [following, setFollowing] =
    useState(initialFollowing);

  const [loading, setLoading] =
    useState(false);


  async function handleClick() {
    if (loading) return;

    setLoading(true);

    try {

      const result =
        await toggleFollowAction(
          userId,
          username
        );


      setFollowing(
        result.following
      );

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  }


  return (
    <Button
      onClick={handleClick}
      disabled={loading}
    >
      {
        loading
          ? "Updating..."
          : following
            ? "Following"
            : "Follow"
      }
    </Button>
  );
}