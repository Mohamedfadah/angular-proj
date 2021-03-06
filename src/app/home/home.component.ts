import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','sidebar.css']
})
export class HomeComponent implements OnInit {

  task:number   = 2;
  imgSrc?:string ;
  peopleByCountry: any[] =
  [ { 'country': 'UK', 'people':    [ { "name": "Douglas Pace" }, { "name": "Mcleod Mueller" }, ] },
    { 'country': 'US', 'people':    [ { "name": "Day Meyers" }, { "name": "Aguirre Ellis" }, { "name": "Cook Tyson" } ] },
    { 'country': 'MARS', 'people':  [ { "name": "Douglas Pace" }, { "name": "Mcleod Mueller" }, ] }
  ];

  constructor() {
    this.imgSrc = "../../assets/man.jpg";
   }

  ngOnInit(): void {
  }

}
