import { DefaultSession } from "next-auth";
import { DefaultJWT } from "@auth/core/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string;
      username?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role?: string;
    username?: string;
  }
}

declare module "@auth/core/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    role?: string;
    username?: string;
  }
}