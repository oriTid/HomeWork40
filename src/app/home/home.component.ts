import { Component, OnInit } from '@angular/core';
import { allusersInfo } from '../Shared/models/allusersInfo.model';
import { dataServices } from '../Shared/services/dataService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  ngOnInit() {
  }

}
