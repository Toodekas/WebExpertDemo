import { Component, OnInit } from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public users: any = [];

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.service.getUsers().then(response => {
      this.users = response.data;
    });
  }
}