import {User} from "./User";

export interface Post {
  id : string
  body : string
  user : User
  date : string
}
