import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'fixedValues', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'fixedValues', dropdown: false, droptable: null, droppayload:null, upload: false} },
  { path: 'formModules', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'formModules', dropdown: false, droptable: null, droppayload:null, upload: false} },
  { path: 'formColumns', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'formColumns', dropdown: true, droptable: 'formModules', droppayload:null, upload: false} },
  { path: 'xtraReports', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{ dropdown: false, droptable: null, droppayload:null, upload: false} },
   
  //SideMenu
  { path: 'eTelematics', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'eTelematics', dropdown: false, droptable: null, droppayload:null, upload: false} },
  { path: 'messageTags', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'messageTags', dropdown: false, droptable: null, droppayload:null, upload: false} },
  { path: 'dataModules', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'dataModules', dropdown: true, droptable: 'eTelematics', droppayload:null, upload: false} },
  { path: 'warningTags', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'warningTags', dropdown: false, droptable: null, droppayload:null, upload: false} },
  { path: 'formulaTags', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'formulaTags', dropdown: true, droptable: 'eTelematics', droppayload:null, upload: false} },
  { path: 'controlTags', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'controlTags', dropdown: true, droptable: 'eTelematics', droppayload:null, upload: false} },
  { path: 'xTagFilters', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'xTagFilters', dropdown: true, droptable: 'eTelematics', droppayload:null, upload: false} },
  
  { path: 'tmatDevices', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'tmatDevices', dropdown: false, droptable: null, droppayload:null, upload: true} },
  { path: 'messageLogs', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'messageLogs', dropdown: false, droptable: null, droppayload:null, upload: false} },
  { path: 'tagMessages', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'tagMessages', dropdown: false, droptable: null, droppayload:null, upload: false} },
  { path: 'logMessages', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'logMessages', dropdown: false, droptable: null, droppayload:null, upload: false} },
  { path: 'warningLogs', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'warningLogs', dropdown: false, droptable: null, droppayload:null, upload: false} },
  { path: 'powerPanels', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'powerPanels', dropdown: false, droptable: null, droppayload:null, upload: false} },
  { path: 'stickLabels', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'stickLabels', dropdown: false, droptable: null, droppayload:null, upload: false} },
  { path: 'globalFence', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'globalFence', dropdown: false, droptable: null, droppayload:null, upload: false} },
  { path: 'metricUnits', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'metricUnits', dropdown: false, droptable: null, droppayload:null, upload: false} },
  { path: 'unitFactors', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'unitFactors', dropdown: true, droptable: 'fixedValues', droppayload:'QUANTITY', upload: false} },
  
  { path: 'buyersLogin', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'buyersLogin', dropdown: false, droptable: null, droppayload:null, upload: false} },
  { path: 'dealerLogin', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'dealerLogin', dropdown: false, droptable: null, droppayload:null, upload: false} },
  { path: 'clientLogin', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'clientLogin', dropdown: false, droptable: null, droppayload:null, upload: false} },

  { path: 'manageUsers', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'manageUsers', dropdown: false, droptable: null, droppayload:null, upload: false} },
  { path: 'accessRoles', loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{primary: 'accessRoles', dropdown: false, droptable: null, droppayload:null, upload: false} },

  //double table
  { path: 'dataFormats', loadChildren: () => import('./pages/double-table/double-table.module').then(m => m.DoubleTableModule), data:{primary: 'dataModules', secondary: 'dataFormats', dropdown: true, droptable: 'eTelematics', droppayload: null} },
  { path: 'tagFormulas', loadChildren: () => import('./pages/double-table/double-table.module').then(m => m.DoubleTableModule), data:{primary: 'formulaTags', secondary: 'tagFormulas', dropdown: true, droptable: 'eTelematics', droppayload: null} },
  { path: 'controlDetailTags', loadChildren: () => import('./pages/double-table/double-table.module').then(m => m.DoubleTableModule), data:{primary: 'controlTags', secondary: 'ccTagDetail', dropdown: true, droptable: 'eTelematics', droppayload: null} },
  { path: 'xfilterTags', loadChildren: () => import('./pages/double-table/double-table.module').then(m => m.DoubleTableModule), data:{primary: 'xTagFilters', secondary: 'xfilterTags', dropdown: true, droptable: 'eTelematics', droppayload: null} },
  { path: 'healthSetup', loadChildren: () => import('./pages/double-table/double-table.module').then(m => m.DoubleTableModule), data:{primary: 'xTagFilters', secondary: 'healthSetup', dropdown: true, droptable: 'eTelematics', droppayload: null} },
  { path: 'firstBuyers', loadChildren: () => import('./pages/double-table/double-table.module').then(m => m.DoubleTableModule), data:{primary: 'firstBuyers', secondary: 'deviceMakes', dropdown: false, droptable: null, droppayload: null} },
  { path: 'regdDealers', loadChildren: () => import('./pages/double-table/double-table.module').then(m => m.DoubleTableModule), data:{primary: 'regdDealers', secondary: 'regdDevices', dropdown: false, droptable: null, droppayload: null} },
  { path: 'regdClients', loadChildren: () => import('./pages/double-table/double-table.module').then(m => m.DoubleTableModule), data:{primary: 'regdClients', secondary: 'regdDevices', dropdown: false, droptable: null, droppayload: null} },
 
  // { path: 'meterdata'  , loadChildren: () => import('./pages/single-table/single-table.module').then(m => m.SingleTableModule),data:{ dropdown: false, droptable: null, droppayload:null} },
  { path: 'double-table', loadChildren: () => import('./pages/double-table/double-table.module').then(m => m.DoubleTableModule) },
 
  { path: 'meterdata', loadChildren: () => import('./pages/meterdata/meterdata.module').then(m => m.MeterdataModule),data:{primary: 'meterdata', dropdown: false, droptable: null, droppayload:null} },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
