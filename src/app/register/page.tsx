"use client";


import {
  useState,
} from "react";


import {
  useRouter,
} from "next/navigation";


import AuthCard from "@/components/auth/AuthCard";


import {
  Input,
} from "@/components/ui/input";


import {
  Button,
} from "@/components/ui/button";


import {
  registerAction,
} from "@/actions/auth/register";



export default function RegisterPage(){


  const router =
    useRouter();



  const [message,setMessage] =
    useState("");



  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ){

    event.preventDefault();



    const formData =
      new FormData(event.currentTarget);



    const result =
      await registerAction(formData);



    if(result.success){

      router.push("/login");

    }

    else{

      setMessage(
        result.message ??
        "Registration failed"
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
        from-pink-50
        via-white
        to-purple-50
        p-6
      "
    >


      <AuthCard

        title="Create Account"

        subtitle="Join CivicConnect today"

      >


        <form

          onSubmit={handleSubmit}

          className="
            space-y-4
          "

        >


          <Input
            name="name"
            placeholder="Full name"
          />


          <Input
            name="username"
            placeholder="Username"
          />


          <Input
            name="email"
            type="email"
            placeholder="Email"
          />


          <Input

            name="password"

            type="password"

            placeholder="Password"

          />



          {
            message && (

              <p className="text-sm text-red-600">

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

            Register

          </Button>


        </form>


      </AuthCard>


    </main>

  );

}