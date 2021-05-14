import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatusService } from 'src/app/services/login-status/login-status.service';
import { menuItems } from 'src/app/models/headermenu'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  menuItems: Array<any> = menuItems;
  constructor(
    private _router: Router,
    public sharedService: LoginStatusService) {}

  ngOnInit(): void {
  }
}
