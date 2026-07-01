"use client";

import { useRef, useState } from "react";

type AvatarUploadProps = {
  value?: string;
  onChange: (url: string) => void;
};

export default function AvatarUpload({
  value,
  onChange,
}: AvatarUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState(value ?? "");
  const [uploading, setUploading] = useState(false);

  async function handleFile(file: File) {
    setUploading(true);

    try {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("folder", "avatars");

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      setPreview(result.url);
      onChange(result.url);
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Upload failed."
      );
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-32 w-32 overflow-hidden rounded-full border bg-muted">
        {preview ? (
          <img
            src={preview}
            alt="Avatar"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-500">
            No Avatar
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        hidden
        accept="image/*"
        onChange={async (e) => {
          const file = e.target.files?.[0];

          if (!file) return;

          await handleFile(file);
        }}
      />

      <button
        type="button"
        disabled={uploading}
        onClick={() => inputRef.current?.click()}
        className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Change Avatar"}
      </button>
    </div>
  );
}