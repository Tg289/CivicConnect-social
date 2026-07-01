"use client";

import { useRef, useState } from "react";

type CoverUploadProps = {
  value?: string;
  onChange: (url: string) => void;
};

export default function CoverUpload({
  value,
  onChange,
}: CoverUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [preview, setPreview] = useState(value ?? "");
  const [uploading, setUploading] = useState(false);

  async function upload(file: File) {
    setUploading(true);

    try {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("folder", "covers");

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
    <div className="space-y-3">
      <div className="relative h-56 w-full overflow-hidden rounded-xl border bg-gray-100">
        {preview ? (
          <img
            src={preview}
            alt="Cover"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">
            No Cover Image
          </div>
        )}
      </div>

      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/*"
        onChange={async (e) => {
          const file = e.target.files?.[0];

          if (!file) return;

          await upload(file);
        }}
      />

      <button
        type="button"
        disabled={uploading}
        onClick={() => inputRef.current?.click()}
        className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Change Cover"}
      </button>
    </div>
  );
}