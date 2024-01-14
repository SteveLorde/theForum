import {Post} from "./Post";

export interface User {
  id : string
  username : string
  profilepicfilename : string
  joineddate : string
  numofthreads : number
  numofposts : number
  posts? : Post[]
}
