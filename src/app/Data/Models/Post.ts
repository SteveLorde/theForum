import {User} from "./User";

export interface Post {
  id : string
  threadid : string
  body : any
  user : User
  date : string
}
