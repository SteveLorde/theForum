import {User} from "./User";
import {Post} from "./Post";

export interface Thread {
  id : string
  subcategoryid : string
  title : string
  posts : Post[]
  date : string
  numofposts : number
  userowner : User
  lastpost? : Post
}
