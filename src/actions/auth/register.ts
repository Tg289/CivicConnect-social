"use server";

import { RegisterSchema } from "@/lib/validations/auth/register-schema";
import { registerUser } from "@/services/auth/register.service";

export async function registerAction(formData: FormData) {
  const parsed = RegisterSchema.safeParse({
    name: formData.get("name"),
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await registerUser(parsed.data);

    return {
      success: true,
      message: "Account created successfully.",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Registration failed.",
    };
  }
}