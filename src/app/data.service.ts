import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  async getUsers() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data;
  }

  async getUser(userId: string) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/' + userId);
    return res.data;
  }
}
