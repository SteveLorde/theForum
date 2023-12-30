import {SubCategories} from "./SubCategories";

export interface Category {
  id : string
  name : string
  subcategories : SubCategories[]
}
