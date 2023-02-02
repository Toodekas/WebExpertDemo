import { Component, NgIterable, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: any[] = [];
  searchTerm: string = '';


  get filteredUsers() {
    return this.users$.filter(user => 
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  constructor(private apiClient: DataService) { }

  async ngOnInit() {
    this.users$ = await this.apiClient.getUsers();
  }

}
