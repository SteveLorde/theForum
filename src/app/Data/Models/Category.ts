import {SubCategory} from "./SubCategory";

export interface Category {
  id : string
  name : string
  subcategories : SubCategory[]
}
