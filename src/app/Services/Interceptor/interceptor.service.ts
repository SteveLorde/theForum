import {HttpEvent, HttpHandlerFn, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  if (typeof localStorage !== undefined && null && "") {
    //WILL AUTOMATICALLY APPEND NEW HEADER IF USERTOKEN IS FOUND
    let usertoken = localStorage.getItem('usertoken')
    const reqWithHeaderToken = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${usertoken}` ),
    })
    return next(reqWithHeaderToken);
  }
  else {
    return next(req)
  }
}
