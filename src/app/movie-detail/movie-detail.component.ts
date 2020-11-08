import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from '../index/movie';
import { MovieService } from '../services/movie.service';
import { Review } from '../index/reviews';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;
  reviews: Review[];
  
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private reviewService: ReviewService
  ) { }

  ngOnInit() {
    this.getMovie();
    this.getReviews();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }
  getReviews(): void {
    this.reviewService.getReviews()
      .subscribe(reviews => this.reviews = reviews);
  }
}
