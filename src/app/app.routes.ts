import { Routes } from '@angular/router';
import {HomeComponent} from "./Pages/Home/home.component";
import {SearchPageComponent} from "./Pages/Search/search-page.component";
import {ThreadPageComponent} from "./Pages/Thread/thread-page.component";
import {SubcategoryPageComponent} from "./Pages/SubCategory/subcategory-page.component";

export const routes: Routes = [
  {path: "/", component: HomeComponent },
  {path: "/search/:threadname", component: SearchPageComponent },
  {path: "/subcategory/:threadscategory", component: SubcategoryPageComponent },
  {path: "/thread/:id", component: ThreadPageComponent },
  {path: "/", component: HomeComponent },
];
