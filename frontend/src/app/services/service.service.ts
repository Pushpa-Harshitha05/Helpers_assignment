import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  addHelper(data: any) {
    return this.http.post('http://localhost:3002/add-helper', data);
  }

  display() {
    return this.http.get('http://localhost:3002/display');
  }

}
