import { Component, OnInit } from '@angular/core';
import { dataServices } from '../Shared/services/dataService.service';
import { allusersInfo } from '../Shared/models/allusersInfo.model';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  homeAllUsersData: allusersInfo;

  constructor(private x: dataServices) {

    this.homeAllUsersData = this.x.results;

  }

  public sendChosenUser(j: number) {

    this.x.setSelectedUser(j);

  }
  ngOnInit() {
  }


}
