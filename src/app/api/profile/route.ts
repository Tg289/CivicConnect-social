import { NextResponse } from "next/server";

import { auth } from "@/lib/auth/auth";

import {
  getProfileByUserId,
  updateProfile,
} from "@/services/profile/profile.service";

import { ProfileSchema } from "@/lib/validations/profile/profile-schema";

export async function GET() {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const profile = await getProfileByUserId(session.user.id);

  return NextResponse.json(profile);
}

export async function PUT(request: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const body = await request.json();

  const parsed = ProfileSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: parsed.error.issues[0]?.message,
      },
      { status: 400 }
    );
  }

  const profile = await updateProfile(
    session.user.id,
    parsed.data
  );

  return NextResponse.json(profile);
}