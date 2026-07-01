import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";
import { RegisterSchema } from "@/lib/validations/auth/register-schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const validated = RegisterSchema.parse(body);

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: validated.email },
          {
            profile: {
              username: validated.username,
            },
          },
        ],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(
      validated.password,
      12
    );

    const user = await prisma.user.create({
      data: {
        name: validated.name,
        email: validated.email,
        password: hashedPassword,

        profile: {
          create: {
            username: validated.username,
          },
        },
      },
    });

    return NextResponse.json(user, {
      status: 201,
    });
  } catch {
    return NextResponse.json(
      { error: "Registration failed" },
      { status: 500 }
    );
  }
}