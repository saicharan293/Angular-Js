import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  trendingMovies: any;

  ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
	}

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.getTrendingMovies();
  }
  getTrendingMovies(){
    this.http.get('/data/trending-movies.json').subscribe((movies)=>{
      console.log(movies)
      this.trendingMovies=movies
      console.log('trending movies',this.trendingMovies)
    })
  }
}
