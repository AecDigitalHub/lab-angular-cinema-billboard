import { Component, OnInit } from '@angular/core';
import { Movies } from '../services/movies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  movies: Array<Object> = [];
  constructor(private router: Router, private mov: Movies) { }

  ngOnInit() {
    this.movies = this.mov.getMovies();
  }

}


