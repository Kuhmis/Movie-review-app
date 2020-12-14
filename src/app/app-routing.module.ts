import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomeComponent } from './full-login/home/home.component';
import { LoginComponent } from './full-login/login/login.component';
import { RegisterComponent } from './full-login/register/register.component';
import { AuthGuard } from './full-login/_helpers/auth.guard';
import { ReviewComponent } from './components/review/review.component';


const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: '/explore', pathMatch: 'full' },
  { path: 'explore', component: DashboardComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'review', component: ReviewComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
