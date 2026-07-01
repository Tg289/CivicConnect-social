"use client";


import {
  useState,
} from "react";


import {
  Button,
} from "@/components/ui/button";


import {
  Textarea,
} from "@/components/ui/textarea";


import {
  createPostAction,
} from "@/actions/posts/post";



export default function CreatePost() {


  const [content,setContent] =
    useState("");


  const [loading,setLoading] =
    useState(false);



  async function submitPost(){

    if(!content.trim())
      return;


    setLoading(true);


    try{

      await createPostAction({

        content,

        imageUrl:"",

        videoUrl:"",

      });


      setContent("");


    }

    finally{

      setLoading(false);

    }

  }



  return (

    <div
      className="
        rounded-3xl
        border
        bg-white
        p-6
        shadow-sm
      "
    >


      <h2
        className="
          mb-4
          text-xl
          font-bold
        "
      >

        Create Post

      </h2>



      <Textarea

        value={content}

        onChange={(e)=>
          setContent(
            e.target.value
          )
        }

        placeholder="Share something..."

        className="
          min-h-32
          rounded-2xl
        "

      />



      <div
        className="
          mt-4
          flex
          justify-end
        "
      >

        <Button

          onClick={submitPost}

          loading={loading}

          disabled={
            !content.trim()
          }

        >

          Post

        </Button>


      </div>


    </div>

  );

}