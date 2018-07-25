import { Injectable } from '@angular/core';
import * as _ from 'underscore';
import { sample } from '../../sample-movies';

interface Movie {
  id: number,
  title: string,
  poster: string,
  synopsis: string,
  genres: Array<string>,
  year: number,
  director: string,
  actors: Array<string>,
  hours?: Array<string>,
  room?: number
}

@Injectable()
export class Movies{

  movies : Array<Movie> = sample;
    
   constructor() { }

getMovies(): Array <Object> {
  console.log(this.movies);
  return this.movies;
}

getMovie(id: number): Object {
  return _.findWhere(this.movies, { id });

}


}