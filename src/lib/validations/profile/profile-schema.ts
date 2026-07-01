import { z } from "zod";

export const ProfileSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters.")
    .max(30, "Username cannot exceed 30 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Only letters, numbers and underscores are allowed."
    ),

  name: z
    .string()
    .trim()
    .min(2)
    .max(60),

  bio: z
    .string()
    .trim()
    .max(250)
    .optional()
    .or(z.literal("")),

  location: z
    .string()
    .trim()
    .max(100)
    .optional()
    .or(z.literal("")),

  website: z
    .string()
    .trim()
    .url("Invalid website URL.")
    .optional()
    .or(z.literal("")),

  avatar: z
    .string()
    .url()
    .optional()
    .or(z.literal("")),

  coverImage: z
    .string()
    .url()
    .optional()
    .or(z.literal(""))
});

export type ProfileInput = z.infer<typeof ProfileSchema>;