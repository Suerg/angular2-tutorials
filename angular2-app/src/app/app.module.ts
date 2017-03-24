import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing'

import { CoreService } from './services/core.service';
import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, NavbarComponent, AboutComponent, ProfileComponent ],
  providers: [ CoreService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
