"use client";


import {
  useState,
} from "react";


import {
  useRouter,
} from "next/navigation";


import Link from "next/link";


import AuthCard from "@/components/auth/AuthCard";


import {
  Input,
} from "@/components/ui/input";


import {
  Button,
} from "@/components/ui/button";


import {
  loginAction,
} from "@/actions/auth/login";




export default function LoginPage(){


  const router =
    useRouter();


  const [message,setMessage] =
    useState("");




  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ){

    event.preventDefault();



    const formData =
      new FormData(
        event.currentTarget
      );



    const result =
      await loginAction(formData);



    if(result.success){

      router.push("/feed");

      router.refresh();

    }

    else{

      setMessage(
        result.message ??
        "Invalid credentials"
      );

    }

  }




  return (

    <main

      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-gradient-to-br
        from-purple-50
        via-white
        to-pink-50
        p-6
      "

    >



      <AuthCard

        title="Welcome Back"

        subtitle="Login to continue on CivicConnect"

      >



        <form

          onSubmit={handleSubmit}

          className="
            space-y-4
          "

        >



          <Input

            name="email"

            type="email"

            placeholder="Email"

            required

          />



          <Input

            name="password"

            type="password"

            placeholder="Password"

            required

          />




          {
            message && (

              <p
                className="
                  text-sm
                  text-red-600
                "
              >

                {message}

              </p>

            )
          }




          <Button

            type="submit"

            className="
              w-full
            "

          >

            Login

          </Button>




        </form>




        <p

          className="
            mt-6
            text-center
            text-sm
            text-gray-500
          "

        >

          Don't have an account?

          {" "}


          <Link

            href="/register"

            className="
              font-semibold
              text-pink-600
            "

          >

            Register

          </Link>


        </p>



      </AuthCard>



    </main>

  );

}