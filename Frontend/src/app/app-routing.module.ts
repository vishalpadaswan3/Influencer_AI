import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component'; // Ensure this path is correct
import { LoginpageComponent } from './loginpage/loginpage.component'; // Ensure this path is correct
import { GenerateresponseComponent } from './generateresponse/generateresponse.component';

const routes: Routes = [
  { path: 'login', component: LoginpageComponent},
  { path: '', component: LandingPageComponent},
  { path: 'generate', component: GenerateresponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
