import { Routes } from '@angular/router';
import {HomeComponent} from "./Pages/Home/home.component";
import {SearchPageComponent} from "./Pages/Search/search-page.component";
import {ThreadPageComponent} from "./Pages/Thread/thread-page.component";
import {SubcategoryPageComponent} from "./Pages/SubCategory/subcategory-page.component";
import {AuthenticationlandingPageComponent} from "./Pages/AuthenticationLanding/authenticationlanding-page.component";
import {ProfilePageComponent} from "./Pages/Profile/profile-page.component";
import {NotificationsPageComponent} from "./Pages/Notifications/notifications-page.component";
import {CreatethreadPageComponent} from "./Pages/CreateThread/createthread-page.component";

export const routes: Routes = [
  {path: "", component: HomeComponent },
  {path: "search/:threadname", component: SearchPageComponent },
  {path: "subcategory/:subcategoryid", component: SubcategoryPageComponent },
  {path: "thread/:threadid", component: ThreadPageComponent },
  {path: "auth", component: AuthenticationlandingPageComponent },
  {path: "profile/:userid", component: ProfilePageComponent },
  {path: "createthread/:subcatid", component: CreatethreadPageComponent },
  {path: "notifications", component: NotificationsPageComponent },
];
