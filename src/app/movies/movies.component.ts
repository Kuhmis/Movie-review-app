import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

//import { Movie } from '../index/watch';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  newMovie: string;
  movies: any;
  movieObj: any;

  constructor() {
   this.newMovie = '';
   this.movies = [];
  }
  
  addMovie(event){
    this.movieObj = {
      newMovie: this.newMovie,
      completed: false
    }
    this.movies.push(this.movieObj);
    this.newMovie = '';
    event.preventDefault();
  }
  deleteMovie(index) {
    this.movies.splice(index, 1);
  }

  deleteSelectedMovies() {
    //need ES5 to reverse loop in order to splice by index
    for(var i=(this.movies.length -1); i > -1; i--) {
      if(this.movies[i].completed) {
        this.movies.splice(i, 1);
      }
    }
  }
  ngOnInit(): void {
  }

}
