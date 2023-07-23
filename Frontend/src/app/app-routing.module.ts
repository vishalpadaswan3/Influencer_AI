import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component'; // Ensure this path is correct
import { LoginpageComponent } from './loginpage/loginpage.component'; // Ensure this path is correct

const routes: Routes = [
  { path: 'login', component: LoginpageComponent},
  { path: '', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
