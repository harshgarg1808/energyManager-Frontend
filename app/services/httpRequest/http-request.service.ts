import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { LoginStatusService } from 'src/app/services/login-status/login-status.service';

//API URL IMPORT
import { config } from '../../../environments/config'

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  httpOptions: any = {
    headers:{
      'Content-Type': 'application/json',
      'Authorization': ''  ,
      'applicationid': ''
    },
    
  }
  constructor(
    private httpClient: HttpClient,
    public sharedService: LoginStatusService,
    ) {}  


  handleError(error: HttpErrorResponse) {
    console.log('handle');
    
    let errorObj = {
      status:false,
      msg: ''
    };
    if(error.error instanceof ErrorEvent) {
      console.log('client');
      
      errorObj.msg = error.error.message; //Client Side Errors
    } else { 
      console.log('server');
      
      errorObj.msg = error.error.message; 
    }  
    this.sharedService.sessionExpired('session')
    return throwError(errorObj)
  }

  public request(endpoint: string , payload: any = {},method:string = 'POST'){
    
    if(endpoint !== 'managelogin/login'){ 
      var data = localStorage.getItem(config.license_code);
      if(data !== null){
        var LocalStorage: any = JSON.parse(data)
        this.httpOptions['headers']['Authorization'] = 'Bearer ' + LocalStorage['web_token']
        this.httpOptions['headers']['applicationid'] =  LocalStorage['user_details']['apln_code']
        payload['client_id'] = LocalStorage['user_details']['client_id']  


      }   
    }
    this.httpOptions['body'] = payload;
    return this.httpClient.request(method,config.API_HOST + '/api/' + endpoint,this.httpOptions).pipe(catchError(this.handleError.bind(this)));
  
  }
}
