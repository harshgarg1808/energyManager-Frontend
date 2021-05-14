import { Injectable } from '@angular/core';
import { ToastServiceService } from 'src/app/services/toastService/toast-service.service'
import { Router } from '@angular/router';
//API URL IMPORT
import { config } from '../../../environments/config'

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {
  
  constructor(
    private _router: Router,
    public toastService: ToastServiceService) {}

  loginStatus: number = 0;
  license_code: any =  {

    user_details : '',
    web_token    : '',
    login_status : '',

  }
  //Func to be created
  
  updateDetails(value: any){
    //called when user logs in 

    this.license_code['user_details'] = value['data']
    this.license_code['web_token'] = value['token']
    this.license_code['login_status'] = '1'
    this.loginStatus = 1
    localStorage.setItem(config.license_code ,JSON.stringify(this.license_code))

  }

  sessionExpired(type: any){
    localStorage.removeItem(config.license_code);
    this.loginStatus = 0
    if(type === 'session')
      this.toastService.show('Session Expired','Please Relogin','bg-danger' ,{});   
    this._router.navigate(['/login']);
  }

}
