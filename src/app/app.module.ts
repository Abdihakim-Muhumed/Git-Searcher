import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { UserServiceService } from './user-service.service';
import { TimeCalcPipe } from './time-calc.pipe';
import { AboutComponent } from './about/about.component';
import { AppHighlightDirective } from './app-highlight.directive';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubProfileComponent,
    TimeCalcPipe,
    AboutComponent,
    AppHighlightDirective,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
