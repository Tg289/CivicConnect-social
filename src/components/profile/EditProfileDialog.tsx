"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Dialog from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import AvatarUpload from "./AvatarUpload";
import CoverUpload from "./CoverUpload";

import {
  ProfileInput,
  ProfileSchema,
} from "@/lib/validations/profile/profile-schema";

import { updateProfileAction } from "@/actions/profile";

type Props = {
  defaultValues: ProfileInput;
};

export default function EditProfileDialog({
  defaultValues,
}: Props) {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProfileInput>({
    resolver: zodResolver(ProfileSchema),
    defaultValues,
  });

  async function submit(values: ProfileInput) {
    setLoading(true);

    try {
      await updateProfileAction(values);
      setOpen(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      title="Edit Profile"
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="space-y-6"
      >
        <CoverUpload
          value={defaultValues.coverImage}
          onChange={(url) =>
            setValue("coverImage", url)
          }
        />

        <AvatarUpload
          value={defaultValues.avatar}
          onChange={(url) =>
            setValue("avatar", url)
          }
        />

        <div>
          <Label>Name</Label>
          <Input {...register("name")} />

          {errors.name && (
            <p className="text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <Label>Username</Label>
          <Input {...register("username")} />

          {errors.username && (
            <p className="text-sm text-red-500">
              {errors.username.message}
            </p>
          )}
        </div>

        <div>
          <Label>Bio</Label>
          <Textarea {...register("bio")} />

          {errors.bio && (
            <p className="text-sm text-red-500">
              {errors.bio.message}
            </p>
          )}
        </div>

        <div>
          <Label>Location</Label>
          <Input {...register("location")} />
        </div>

        <div>
          <Label>Website</Label>
          <Input {...register("website")} />
        </div>

        <div className="flex justify-end gap-3">
          <Button
            type="button"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </Dialog>
  );
}