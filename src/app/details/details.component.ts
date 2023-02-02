import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: any;

  constructor(
    private apiClient: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.route.params.subscribe( params => this.user$ = params['id'])
  }

  async ngOnInit() {
    this.user$ = await this.apiClient.getUser(this.user$)
  }

  goBack(): void {
    this.location.back();
  }

}
