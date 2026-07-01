import { NextResponse } from "next/server";

import { auth } from "@/lib/auth/auth";
import { uploadImage, validateImage } from "@/lib/cloudinary/cloudinary";

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const formData = await req.formData();

    const file = formData.get("file");

    const folder =
      (formData.get("folder") as string) ?? "avatars";

    if (!(file instanceof File)) {
      return NextResponse.json(
        {
          message: "No file uploaded.",
        },
        {
          status: 400,
        }
      );
    }

    validateImage(file);

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const imageUrl = await uploadImage(
      buffer,
      `civicconnect/${folder}`
    );

    return NextResponse.json({
      success: true,
      url: imageUrl,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Upload failed.",
      },
      {
        status: 500,
      }
    );
  }
}