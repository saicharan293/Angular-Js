import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  trendingMovies: any;
  theaterMovies: any;
  popularMovies:any;

  ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheaterMovies();
  }

  getTrendingMovies(){
    this.http.get('/data/trending-movies.json').subscribe((movies)=>{
      console.log(movies)
      this.trendingMovies=movies
      console.log('trending movies',this.trendingMovies)
    })
  }

  getTheaterMovies(){
    this.http.get('/data/theatre-movies.json').subscribe((movies)=>{
      console.log(movies)
      this.theaterMovies=movies
      console.log('theater movies',this.theaterMovies)
    })
  }
  getPopularMovies(){
    this.http.get('/data/popular-movies.json').subscribe((movies)=>{
      console.log(movies)
      this.popularMovies=movies
      // console.log('theater movies',this.theaterMovies)
    })
  }
}
