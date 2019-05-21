import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ResumeComponent } from './resume/resume.component';




@NgModule({
  declarations: [
    AppComponent,
    ContactMeComponent,
    ResumeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'resume', component: ResumeComponent},
      {path: 'contactMe', component: ContactMeComponent}
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
