    import { Injectable } from '@angular/core';
    import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
    import {Observable} from 'rxjs';

 @Injectable({
        providedIn: 'root'
})

 export class CatalogueService {
      public host:string="https://localhost:8080";

      constructor(private http:HttpClient) {
      }

      public getResource(url){
          return this.http.get(url);
      }

      public patchResource(url,data){
        return this.http.patch(url,data);
      }
 }
