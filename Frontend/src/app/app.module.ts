// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginpageComponent } from './loginpage/loginpage.component'; // Ensure this path is correct
import { HttpClientModule } from '@angular/common/http'; // Ensure this path is correct
import { FormsModule } from '@angular/forms';
import { GenerateresponseComponent } from './generateresponse/generateresponse.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginpageComponent,
    GenerateresponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule, // Ensure this line is added
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
