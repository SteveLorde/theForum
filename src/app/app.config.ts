import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import {loggingInterceptor} from "./Services/Interceptor/interceptor.service";
import {provideQuillConfig} from "ngx-quill";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideHttpClient(withFetch(),withInterceptors([loggingInterceptor])),provideQuillConfig({
    modules : {
    },
    theme : 'snow',
    format : 'json',
  })]
};
