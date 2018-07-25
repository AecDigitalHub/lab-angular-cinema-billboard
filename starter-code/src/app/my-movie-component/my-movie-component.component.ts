import { Component, OnInit } from '@angular/core';
import { Movies } from '../services/movies';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
movie: Object = {

};
  constructor(private route: ActivatedRoute, private mov: Movies) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.movie = this.mov.getMovie(Number(params['id']));
    });
}

}


