import { Injectable } from '@angular/core';
import { allusersInfo } from "../models/allusersInfo.model";
import { HttpClient } from '@angular/common/http';
import { userInfo } from '../models/userInfo.model';


@Injectable()


export class dataServices {
        
 
    public results: allusersInfo = { data: [] };


    constructor(private myHttpClient: HttpClient) {

        this.myHttpClient.get('https://reqres.in/api/users').subscribe((x: allusersInfo) => { this.results.data = x.data });
            }

    selectedUser: userInfo ;

    public setSelectedUser(id: number): void {
        for (let x = 0; x < this.results.data.length; x++) {
            if (this.results.data[x].id == id) {
                this.selectedUser = this.results.data[x];
                break;
            }
        }

    }

}
