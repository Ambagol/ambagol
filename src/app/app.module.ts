import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SkillsComponent } from './skills/skills.component';
import { ConnectComponent } from './connect/connect.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutComponent,
    ResumeComponent,
    StudentPortalComponent,
    RestaurantComponent,
    SkillsComponent,
    ConnectComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
