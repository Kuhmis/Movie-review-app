import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Movie } from '../index/movie';
import { MOVIES } from '../mock-up/mock-movies';
import { MessageService } from '../message.service';

@Injectable({providedIn: 'root'})

export class MovieService {

  constructor(private messageService: MessageService) { }
  
  getMovies(): Observable<Movie[]> {
    this.messageService.add('MovieService: fetched movies');
    return of(MOVIES);
  }


  getMovie(id: number): Observable<Movie> {
    this.messageService.add('MovieService: fetched movies');
    return of(MOVIES.find(movie => movie.id === id));
  }

}
