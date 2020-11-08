import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Review } from '../index/reviews';
import { REVIEWS } from '../mock-up/mock-reviews';
import { MessageService } from '../message.service';


@Injectable({providedIn: 'root'})

export class ReviewService {

  constructor(private messageService: MessageService) { }
  
  getReviews(): Observable<Review[]> {
    this.messageService.add('Reviews');
    return of(REVIEWS);
  }


  getReview(id: number): Observable<Review> {
    this.messageService.add('Reviews');
    return of(REVIEWS.find(review => review.id === id));
  }

}