import {SubCategory} from "./SubCategory";

export interface Category {
  id : string
  name : string
  orderingid : number
  subcategories : SubCategory[]
}
