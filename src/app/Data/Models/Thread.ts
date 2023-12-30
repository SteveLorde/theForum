import {User} from "./User";
import {Post} from "./Post";

export interface Thread {
  title : string
  posts : Post[]
  userowner : User
}
