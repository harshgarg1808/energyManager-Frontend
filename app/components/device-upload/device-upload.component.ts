import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HttpRequestService } from '../../services/httpRequest/http-request.service'
import { LoginStatusService } from '../../services/login-status/login-status.service';
import { ToastServiceService } from 'src/app/services/toastService/toast-service.service'
import { apiURL } from 'src/app/models/apis';
import { apiPayload } from 'src/app/models/payload';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { config } from 'src/environments/config';

@Component({
  selector: 'app-device-upload',
  templateUrl: './device-upload.component.html',
  styleUrls: ['./device-upload.component.scss']
})
export class DeviceUploadComponent implements OnInit {
  @ViewChild('content')templateRef: TemplateRef<any> | undefined

  buyers: Array<any> = [];
  models: Array<any> = [];

  payload: any = {
    buyer_code: '',
    model_code: ''
  };

  modalOptions: Object = {centered:true,size: 'lg'};
  
  filesToUpload: Array<File> = [];

  constructor(
    private httpService: HttpRequestService,
    private sharedService: LoginStatusService,
    private modal:NgbModal,
    public toastService: ToastServiceService
  ) { }

  ngOnInit(): void {
    this.getBuyersList()
  }

  getBuyersList(): void{
    this.httpService.request(apiURL['firstBuyers'].base + 'select',apiPayload['firstBuyers'].base).subscribe(
      (response: any) => {      
        if(response['status'] === 'success'){
          this.buyers = response['data'];
          this.payload['buyer_code'] = this.buyers[0].code;
          this.getDeviceMakes();
        } else {
          if(response['success'] === false)
            this.sharedService.sessionExpired('session')    
        }
      }
    )
  }

  getDeviceMakes(): void{
    this.httpService.request(apiURL['deviceMakes'].base + 'select',apiPayload['deviceMakes'].base).subscribe(
      (response: any) => {      
        if(response['status'] === 'success'){
          this.models = response['data'];
          this.payload['buyer_make'] = this.models[0].code;
        } else {
          if(response['success'] === false)
            this.sharedService.sessionExpired('session')    
        }
      }
    )
  }

  openModal(): void{
    this.modal.open(this.templateRef,this.modalOptions) 
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>> fileInput.target.files;
  }

  upload(): void{
    this.makeFileRequest(apiURL['uploadCSV'], [], this.filesToUpload)
      .then((result: any) => {
        if(result.status === 'success'){
          this.modal.dismissAll();
          this.toastService.show('New Devices','Upload Successfull','bg-success' ,{});
        }else{
          this.modal.dismissAll();
          this.toastService.show('New Devices','Upload Unsuccessfull','bg-danger' ,{});
        }
      }, (error) => {
        this.modal.dismissAll();
        this.toastService.show('New Devices','Upload Unsuccessfull','bg-danger' ,{});
      });
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
      return new Promise((resolve, reject) => {
          var formData: any = new FormData();
          var xhr = new XMLHttpRequest();
          var data = localStorage.getItem(config.license_code);
          if(data)
            var LocalStorage: any = JSON.parse(data)

          formData.append('sample',this.filesToUpload[0],this.filesToUpload[0].name);
          formData.append('buyer_code',this.payload.buyer_code);
          formData.append('buyer_make',this.payload.buyer_make);

          
          xhr.onreadystatechange = function () {
              if (xhr.readyState == 4) {
                  if (xhr.status == 200) {
                      resolve(JSON.parse(xhr.response));
                  } else {
                      reject(xhr.response);
                  }
              }
          }
          xhr.open("POST", config.API_HOST + '/api/' + url, true);
          xhr.setRequestHeader("Authorization", "Bearer " + LocalStorage['web_token']);
          xhr.send(formData);
      });
    }

}
