import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Genre } from '../index/genre';
import { GENRES } from '../mock-up/mock-genres';
import { MessageService } from '../message.service';


@Injectable({providedIn: 'root'})

export class GenreService {

  constructor(private messageService: MessageService) { }
  
  getGenres(): Observable<Genre[]> {
    this.messageService.add('GenreService: fetched genres');
    return of(GENRES);
  }


  getGenre(id: number): Observable<Genre> {
    this.messageService.add('GenreService: fetched genres');
    return of(GENRES.find(genre => genre.id === id));
  }

}
