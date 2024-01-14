import {HttpEvent, HttpHandlerFn, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export function loggingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  let usertoken = "localStorage.getItem('usertoken')"
  if (usertoken != null) {
    const reqWithHeaderToken = req.clone({
      headers: req.headers.append( "Authorization", `Bearer ${usertoken}` ),
    })
    return next(reqWithHeaderToken);
  }
  else {
    return next(req)
  }
}
