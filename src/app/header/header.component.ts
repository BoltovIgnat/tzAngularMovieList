import { Component, OnInit } from '@angular/core';
import { MoviesService }            from '../movies/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'IBC tz Movie';
  language : string;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    
  }

}
