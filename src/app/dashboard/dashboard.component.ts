import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { User } from '../_models/index';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
