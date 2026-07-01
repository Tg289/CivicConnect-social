import * as React from "react";


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  loading?: boolean;

  variant?:
    | "default"
    | "outline"
    | "destructive"
    | "ghost";

}
export function Button({

  children,

  loading = false,

  disabled,

  className = "",

  type = "button",

  variant = "default",

  ...props

}: ButtonProps) {


  const variants = {

    default:
      `
      bg-gradient-to-r
      from-pink-500
      to-purple-600
      text-white
      shadow-md
      hover:shadow-lg
      hover:-translate-y-0.5
      `,


    outline:
      `
      border
      border-gray-300
      bg-white
      text-black
      hover:bg-gray-100
      `,


    destructive:
      `
      bg-red-600
      text-white
      hover:bg-red-700
      `,


    ghost:
      `
      bg-transparent
      text-gray-700
      hover:bg-gray-100
      `,

  };
  return (

    <button

      type={type}

      disabled={
        disabled ||
        loading
      }

      className={`
        inline-flex
        items-center
        justify-center

        rounded-xl

        px-4
        py-2

        font-medium

        transition-all
        duration-200

        disabled:cursor-not-allowed
        disabled:opacity-50

        ${variants[variant]}

        ${className}

      `}

      {...props}

    >

      {
        loading
        ? "Loading..."
        : children
      }


    </button>

  );

}