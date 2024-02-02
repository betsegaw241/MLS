import { ITimeStamp } from './shared';

export interface IUserModel extends ITimeStamp {
    name?:string;
    email:string;
    isFirstTime:boolean;
    role:string;
    token?:string;
    _id:string;
}