"use server";

import { loginUser } from "@/services/auth/login.service";
import { LoginSchema } from "@/lib/validations/auth/login-schema";

export async function loginAction(formData: FormData) {
  const values = {
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  };

  const parsed = LoginSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten(),
    };
  }

  try {
    await loginUser(
      parsed.data.email,
      parsed.data.password
    );

    return {
      success: true,
    };
  } catch {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }
}