import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
  }
  getUser(userId: number) {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }
}