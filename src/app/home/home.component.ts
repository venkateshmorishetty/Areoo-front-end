import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  marketPlaceData:any;
  categoriesData:any;
  slideConfig={"slidesToShow": 4, "slidesToScroll": 4}
  private marketPlace_jsonURL = './assets/marketplace.json';
  private categories_jsonURL = './assets/categories.json'
 constructor(private http: HttpClient) {
  //getting market place json data 
  this.getMarketPlaceJSON().subscribe(data => {
    this.marketPlaceData = data;
   });
   //getting categories json data
   this.getCategoriesJSON().subscribe(data => {
    this.categoriesData = data;
   });
 }
 public getMarketPlaceJSON(): Observable<any> {
  return this.http.get(this.marketPlace_jsonURL);
 }

 public getCategoriesJSON(): Observable<any> {
  return this.http.get(this.categories_jsonURL);
 }


  ngOnInit(): void {
  }



  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  // slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }

}
