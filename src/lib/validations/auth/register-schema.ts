import { z } from "zod";

export const RegisterSchema = z.object({
  name: z
    .string()
    .min(2)
    .max(50),

  username: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers and underscore allowed"),

  email: z
    .string()
    .email(),

  password: z
    .string()
    .min(8)
    .max(100),
});

export type RegisterInput = z.infer<typeof RegisterSchema>;