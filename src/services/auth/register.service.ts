import { prisma } from "@/lib/prisma";
import { hashPassword } from "./password.service";

type RegisterInput = {
  name: string;
  email: string;
  username: string;
  password: string;
};

export async function registerUser(data: RegisterInput) {
  const email = data.email.trim().toLowerCase();
  const username = data.username.trim().toLowerCase();

  const existingEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingEmail) {
    throw new Error("Email is already registered.");
  }

  const existingUsername = await prisma.profile.findUnique({
    where: {
      username,
    },
  });

  if (existingUsername) {
    throw new Error("Username is already taken.");
  }

  const hashedPassword = await hashPassword(data.password);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email,
      password: hashedPassword,

      profile: {
        create: {
          username,
        },
      },
    },

    include: {
      profile: true,
    },
  });

  return user;
}