import { Role } from "@prisma/client";

export function isAdmin(role: Role) {
  return role === "ADMIN";
}

export function isModerator(role: Role) {
  return role === "MODERATOR";
}

export function canModerate(role: Role) {
  return role === "ADMIN" || role === "MODERATOR";
}