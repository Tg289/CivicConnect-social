import { v2 as cloudinary } from "cloudinary";

function configureCloudinary() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error(
      "Cloudinary environment variables are missing."
    );
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });

  return cloudinary;
}

export function validateImage(file: File) {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
  ];

  const maxSize = 5 * 1024 * 1024;

  if (!allowedTypes.includes(file.type)) {
    throw new Error(
      "Only JPG, PNG and WEBP images are allowed."
    );
  }

  if (file.size > maxSize) {
    throw new Error(
      "Image size must be less than 5MB."
    );
  }
}

export async function uploadImage(
  buffer: Buffer,
  folder: string
) {
  const cloudinaryClient = configureCloudinary();

  return new Promise<string>(
    (resolve, reject) => {
      const stream =
        cloudinaryClient.uploader.upload_stream(
          {
            folder,
          },
          (error, result) => {
            if (error || !result) {
              reject(
                error ??
                  new Error(
                    "Cloudinary upload failed."
                  )
              );
              return;
            }

            resolve(result.secure_url);
          }
        );

      stream.end(buffer);
    }
  );
}

export async function deleteImage(
  publicId: string
) {
  const cloudinaryClient = configureCloudinary();

  await cloudinaryClient.uploader.destroy(
    publicId
  );
}