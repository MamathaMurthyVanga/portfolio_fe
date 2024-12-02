import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from './constant';

@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {

  constructor(private http:HttpClient) { }

  ProjectData():Observable<any>{
    return this.http.get(URL+'portfolio/')


  }

}


// use functionality from .ts file
// backend end points
// retrieve data from backend end points and gives data to .html file
