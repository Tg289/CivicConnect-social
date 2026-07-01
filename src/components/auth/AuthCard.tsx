import React from "react";
interface Props {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}
export default function AuthCard({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <div
      className="
        w-full
        max-w-md
        rounded-3xl
        border
        bg-white
        p-8
        shadow-xl
      "
    >
      <div className="mb-8">
        <h1
          className="
            text-3xl
            font-bold
            bg-gradient-to-r
            from-pink-500
            to-purple-600
            bg-clip-text
            text-transparent
          "
        >
          {title}

        </h1>
        <p
          className="
            mt-2
            text-sm
            text-gray-500
          "
        >
          {subtitle}
        </p>
      </div>
      {children}
    </div>
  );
}