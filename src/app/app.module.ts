import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SidebarModule } from 'ng-sidebar';

// fake backend
import { fakeBackendProvider } from './full-login/_helpers/fake-backend';
import { ErrorInterceptor } from './full-login/_helpers/error.interceptor';
import { JwtInterceptor } from './full-login/_helpers/jwt.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './full-login/login/login.component';
import { RegisterComponent } from './full-login/register/register.component';
import { AlertComponent } from './full-login/_components/alert.component';
import { HomeComponent } from './full-login/home/home.component';
import { ReviewComponent } from './components/review/review.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextsComponent } from './components/texts/texts.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    MessagesComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    HomeComponent,
    ReviewComponent,
    TextsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SidebarModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
