import { Injectable } from '@angular/core';
import { apiURL } from '../../models/apis';
import { HttpRequestService } from '../../services/httpRequest/http-request.service'
import { ToastServiceService } from '../../services/toastService/toast-service.service'
const baseURL = apiURL.initialData.base
const endpoint = apiURL.initialData

@Injectable({
  providedIn: 'root'
})
export class InitialDataService {

  constructor(    
    private httpService: HttpRequestService,
    public toastService: ToastServiceService) { }

    ngOnInit() {}

  getLocation(){    
    return this.httpService.request(baseURL+endpoint.locations, {})
  }

  getMeter(){
    return this.httpService.request(baseURL+endpoint.meters, {})
  }

  getUnits(){
    return this.httpService.request(baseURL+endpoint.units, {})
  }

  getFacility(){    
    return this.httpService.request(baseURL+endpoint.facility, {})
  }

  getTags(payload: object){
    return this.httpService.request(apiURL.controlTags.base + apiURL.controlTags.tags, payload)
  }
}
