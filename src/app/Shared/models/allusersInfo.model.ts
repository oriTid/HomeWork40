import { userInfo } from './userInfo.model';

export interface allusersInfo {
page?:number;
per_page?:number;
total?:number;
total_pages?:number;

data:userInfo[];


}