import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {

  constructor() { }

  toasts: any[] = [];

  show(head:string,msg: string, type: string| TemplateRef<any>, options: any = {}) {
    this.toasts.push({head,msg,type, ...options });
  }

  remove(toast: any) {    
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
