import { z } from "zod";

export const PostSchema = z.object({
  content: z
    .string()
    .min(1, "Post content cannot be empty.")
    .max(5000, "Post content is too long."),

  imageUrl: z
    .string()
    .url("Invalid image URL.")
    .optional()
    .or(z.literal("")),

  videoUrl: z
    .string()
    .url("Invalid video URL.")
    .optional()
    .or(z.literal("")),
});

export type PostInput = z.infer<typeof PostSchema>;