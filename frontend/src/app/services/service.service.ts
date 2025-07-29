import { Injectable,signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  sharedNumber = signal<number>(1);

  constructor(private http:HttpClient) { }

  addHelper(data: any) {
    return this.http.post('http://localhost:3002/add-helper', data)
  }

  display() {
    return this.http.get('http://localhost:3002/display');
  }

  incrementNumber() {
    this.sharedNumber.update(value => value+1);
  }

  decrementNumber() {
    this.sharedNumber.update(value => value-1);
  }
}
