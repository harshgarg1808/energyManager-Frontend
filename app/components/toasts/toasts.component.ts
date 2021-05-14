import { Component, OnInit, TemplateRef } from '@angular/core';
import {ToastServiceService} from 'src/app/services/toastService/toast-service.service'
@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss'],
  host: {'[class.ngb-toasts]': 'true'}
})
export class ToastsComponent implements OnInit {

  constructor(public toastService: ToastServiceService) { }
  isTemplate(toast: {head:any,msg: any,type:any}) { return toast.msg instanceof TemplateRef; }
  ngOnInit(): void {
  }

}
