import { prisma } from "@/lib/prisma";


export async function searchUsers(query: string) {

  return prisma.user.findMany({

    where: {
      OR: [
        {
          name: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          profile: {
            username: {
              contains: query,
              mode: "insensitive",
            },
          },
        },
      ],
    },

    select: {
      id: true,
      name: true,
      image: true,

      profile: {
        select: {
          username: true,
          avatar: true,
        },
      },
    },

    take: 20,

  });

}



export async function searchPosts(query: string) {

  return prisma.post.findMany({

    where: {
      content: {
        contains: query,
        mode: "insensitive",
      },
    },

    include: {

      author: {

        include: {

          profile: true,

        },

      },


      _count: {

        select: {

          likes: true,
          comments: true,

        },

      },

    },


    orderBy: {
      createdAt: "desc",
    },


    take: 20,

  });

}



export async function searchAll(query: string) {

  const [users, posts] = await Promise.all([

    searchUsers(query),

    searchPosts(query),

  ]);


  return {

    users,

    posts,

  };

}