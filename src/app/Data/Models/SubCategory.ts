import {Post} from "./Post";
import {Thread} from "./Thread";

export interface SubCategory {
  id : string
  name : string
  numofthreads : number
  threads : Thread[]
  lastpost : Post
}
