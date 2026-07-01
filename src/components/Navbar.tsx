"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";


interface Props {
  username: string;
}



export default function Navbar({
  username,
}: Props) {


  return (

    <header
      className="
        sticky
        top-0
        z-50
        border-b
        bg-white/80
        backdrop-blur-xl
      "
    >


      <div
        className="
          mx-auto
          flex
          max-w-6xl
          items-center
          justify-between
          px-6
          py-4
        "
      >



        {/* Logo */}

        <Link

          href="/feed"

          className="
            text-2xl
            font-black
            bg-gradient-to-r
            from-pink-500
            to-purple-600
            bg-clip-text
            text-transparent
          "

        >

          CivicConnect

        </Link>




        {/* Navigation */}

        <nav

          className="
            hidden
            items-center
            gap-6
            md:flex
          "

        >


          <NavLink
            href="/feed"
            text="Feed"
          />


          <NavLink
            href="/search"
            text="Search"
          />


          <NavLink
            href="/notifications"
            text="Notifications"
          />


          <NavLink
            href={`/profile/${username}`}
            text="Profile"
          />


          <button

            onClick={() => signOut()}

            className="
              rounded-xl
              bg-red-500
              px-4
              py-2
              text-sm
              font-semibold
              text-white
              hover:bg-red-600
            "

          >

            Logout

          </button>



        </nav>



      </div>


    </header>

  );

}




function NavLink({

  href,

  text,

}: {

  href:string;

  text:string;

}) {


  return (

    <Link

      href={href}

      className="
        text-sm
        font-medium
        text-gray-700
        hover:text-pink-600
        transition
      "

    >

      {text}

    </Link>

  );

}