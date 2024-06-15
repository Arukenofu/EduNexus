import type { User } from "~/interfaces/User";

export interface Forum {
  title: string,
  rating: number,
  date: string,
  user: User
}