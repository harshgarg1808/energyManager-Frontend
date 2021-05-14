import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LoginStatusService } from 'src/app/services/login-status/login-status.service';
import { SidemenuServiceService } from "src/app/services/sidemenuService/sidemenu-service.service";
import { config } from 'src/environments/config';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  loginStatus!: number;
  menuCollapsed: any;

  constructor( 
    private _router: Router,
    public sharedService: LoginStatusService,
    public sidemenuService: SidemenuServiceService){}

  ngOnInit(): void {
    var stored_data = localStorage.getItem(config.license_code);

    if(stored_data !== null){
      var license_code = JSON.parse(stored_data);
      this.loginStatus = parseInt(license_code.login_status);
      if (this.loginStatus) {
        this.sharedService.loginStatus = 1;
      } 
      else {
        this._router.navigate(['/login'])
      }
    }
    else{
      this._router.navigate(['/login'])
    }

    this.sidemenuService.collapsed.subscribe((value)=>{
      this.menuCollapsed = value;
    })

    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((NavigationEnd) => {
      if(!this.menuCollapsed){
        this.sidemenuService.toggleSidemenu()
      }
    });
  }
}
