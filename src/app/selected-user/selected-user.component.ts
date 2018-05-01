import { Component, OnInit } from '@angular/core';
import { userInfo } from '../Shared/models/userInfo.model';
import { dataServices } from '../Shared/services/dataService.service';

@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.css']
})
export class SelectedUserComponent implements OnInit {

  
  selectedUserInModule:userInfo;

  constructor(private x: dataServices) { 

    this.selectedUserInModule=x.selectedUser;
  }
  
  

  ngOnInit() {
  }

}
