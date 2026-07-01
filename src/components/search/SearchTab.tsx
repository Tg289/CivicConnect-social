"use client";


interface Props {

  active:
    | "all"
    | "users"
    | "posts";

  setActive:
    (
      value:
      | "all"
      | "users"
      | "posts"
    ) => void;

}


export default function SearchTab({
  active,
  setActive,
}: Props) {


  const tabs = [
    {
      id:"all",
      label:"All",
    },
    {
      id:"users",
      label:"People",
    },
    {
      id:"posts",
      label:"Posts",
    },
  ] as const;



  return (

    <div
      className="
        flex
        gap-3
        rounded-xl
        border
        p-2
      "
    >

      {tabs.map((tab)=>(

        <button
          key={tab.id}
          onClick={() =>
            setActive(tab.id)
          }
          className={`
            rounded-lg
            px-4
            py-2
            text-sm
            transition

            ${
              active === tab.id
              ?
              "bg-black text-white"
              :
              "hover:bg-gray-100"
            }
          `}
        >

          {tab.label}

        </button>

      ))}

    </div>

  );
}