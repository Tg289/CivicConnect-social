import { signIn } from "@/lib/auth/auth";

export async function loginUser(
  email: string,
  password: string
) {
  return await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
}