import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { dataServices } from './Shared/services/dataService.service';
import { TeamComponent } from './team/team.component';
import { SelectedUserComponent } from './selected-user/selected-user.component';

const appRoutes: Routes = [
 
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'slctusr', component: SelectedUserComponent },
  { path: 'pgn', component: PageNotFoundComponent },

  
  //default path - will redirect the current path to 'home'
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
 // ** is an angular placeholder for any path that does not exist
 { path: '**', component: PageNotFoundComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    MainComponent,
    TeamComponent,
    SelectedUserComponent
  ],
  imports: [BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [dataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
