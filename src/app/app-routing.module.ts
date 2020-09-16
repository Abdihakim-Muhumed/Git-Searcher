import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'github-profile', component:GithubProfileComponent},
  {path: 'about', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
