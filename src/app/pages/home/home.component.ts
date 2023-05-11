import { Component, HostListener, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/peliculas.interface';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  movies: Movie[]=[];
  moviesSlideShow: Movie[]=[];

  @HostListener('window:scroll',['$event'])

  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop*1300);
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max){
      this.peliculasSvc.getPeliculas().subscribe(movies=>{
        
      })
    }

    console.log(pos, max)
  }

  constructor(private peliculasSvc:PeliculasService){}

  ngOnInit(): void {
    this.peliculasSvc.getPeliculas().subscribe(movies=>{
      this.moviesSlideShow = movies;
      this.movies = movies;
    })
  }

}
