import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { Observable} from 'rxjs';
import { Subject, ReplaySubject, from, of, range } from 'rxjs';
import { GlobalconstantService } from './globalconstant.service';
import { HttpRequest, HttpHandler, HttpEvent,HttpInterceptor } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/fromPromise';
import { Storage } from '@ionic/storage';
//import { fromPromise } from 'rxjs/observable/fromPromise';



//import { from } from 'rxjs';
//var observableFromPromise = fromPromise(promiseSrc);
@Injectable({
  providedIn: 'root'
})
export class HttprequestinterceptorService {

  private tokenValue;
 
  constructor(private global:GlobalconstantService,private storage:Storage) {
    console.log('Hello TokeninterceptorService');
   }

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return Observable.fromPromise(this.handleAccess(request, next));
  }

  


  private async handleAccess(request: HttpRequest<any>, next: HttpHandler):
  Promise<HttpEvent<any>> {
     // const token = await this.global.getToken();
     /* const token = this.global.getToken();
      console.log("Token Value From Interceptor " + token); */

      this.storage.get('token').then((data)=>{
       
        this.tokenValue =data;
       
      });

      const apikey = await this.global.getAPiKey();
      let changedRequest = request;
      // HttpHeader object immutable - copy values
      const headerSettings: {[name: string]: string | string[]; } = {};

      for (const key of request.headers.keys()) {
        headerSettings[key] = request.headers.getAll(key);
      }
      if (this.tokenValue) {
        headerSettings['Authorization'] = 'Bearer ' + this.tokenValue;
      }
      //headerSettings['Content-Type'] = 'application/json';
      //headerSettings['X-Api-Key'] = apikey;
      headerSettings['X-Api-Key'] = "testtoken";
      headerSettings['Content-Type'] = 'application/x-www-form-urlencoded';



      const newHeader = new HttpHeaders(headerSettings);

      changedRequest = request.clone({
        headers: newHeader});
      return next.handle(changedRequest).toPromise();
    }
}
