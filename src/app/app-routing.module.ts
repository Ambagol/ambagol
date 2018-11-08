import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {AboutComponent} from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SkillsComponent } from './skills/skills.component';
import { ConnectComponent } from './connect/connect.component';




const routes: Routes = [
  {path: '',component:LandingPageComponent},
  {path: 'about', component:AboutComponent},
  {path:'studentportal',component:StudentPortalComponent},
  {path:'restaurant',component:RestaurantComponent},
  {path: 'resume', component:ResumeComponent}, 
  {path: 'skills', component:SkillsComponent},
  {path:'connect',component:ConnectComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
