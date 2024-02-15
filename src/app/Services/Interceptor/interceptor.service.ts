import {HttpEvent, HttpHandlerFn, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export function loggingInterceptor(req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('usertoken')
    if (token != undefined) {
      let reqwithauthheader = req.clone({
        headers: req.headers.set("Authorization", `Bearer ${token}` ),
      })
      return next(reqwithauthheader)
    }
    else {
      return next(req)
    }
  }
  else {
    return next(req)
  }
}
