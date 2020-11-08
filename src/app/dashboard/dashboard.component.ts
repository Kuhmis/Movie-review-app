import { Component, OnInit } from '@angular/core';

import { Genre } from '../index/genre';
import { GenreService } from '../services/genres.service';
import { Movie } from '../index/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  genres: Genre[] = [];
  movies: Movie[];

  constructor(
    private genreService: GenreService,
    private movieService: MovieService) { }

  ngOnInit() {
    this.getGenres();
    this.getMovies();
  }

  getGenres(): void {
    this.genreService.getGenres()
      .subscribe(genres => this.genres = genres);
  }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }
}

