import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: any;

  constructor(private apiClient: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.user$ = params['id'])
  }

  async ngOnInit() {
    this.user$ = await this.apiClient.getUser(this.user$)
  }

}
