import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastsComponent } from './components/toasts/toasts.component'
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { HeaderComponent } from './components/header/header.component'
import { 
  fas
} 
from '@fortawesome/free-solid-svg-icons';
@NgModule({
  declarations: [
    AppComponent,
    ToastsComponent,
    SidemenuComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas);
  }
}
