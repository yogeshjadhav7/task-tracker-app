import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { footerComponent } from './footer/app.footerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { trackerAreaComponent } from './trackerArea/app.trackerAreaComponent';
import { homeAreaComponent } from './homeArea/app.homeAreaComponent';
import { TaskTrackerService } from './services/tasktrackerService';

@NgModule({
  declarations: [
    AppComponent, headerComponent, footerComponent, navComponent,
    contentAreaComponent, trackerAreaComponent, homeAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TaskTrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
