import { Routes } from '@angular/router';
import {HomeComponent} from "./Pages/Home/home.component";
import {SearchPageComponent} from "./Pages/Search/search-page.component";
import {CategoryPageComponent} from "./Pages/Category/category-page.component";
import {ThreadPageComponent} from "./Pages/Thread/thread-page.component";

export const routes: Routes = [
  {path: "/", component: HomeComponent },
  {path: "/search/:threadname", component: SearchPageComponent },
  {path: "/category/:threadscategory", component: CategoryPageComponent },
  {path: "/viewthread/:id", component: ThreadPageComponent },
  {path: "/", component: HomeComponent },
];
