import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  marketPlaceData:any;
  categoriesData:any;
  slideConfig={"slidesToShow": 4, "slidesToScroll": 4}
  private marketPlace_jsonURL = './assets/marketplace.json';
  private categories_jsonURL = './assets/categories.json'

  constructor(private http: HttpClient) {
    this.getMarketPlaceJSON().subscribe(data => {
      this.marketPlaceData = data;
     });
     //getting categories json data
     this.getCategoriesJSON().subscribe(data => {
      this.categoriesData = data;
     });
   }

  ngOnInit(): void {
  }

  public getMarketPlaceJSON(): Observable<any> {
    return this.http.get(this.marketPlace_jsonURL);
   }
  
   public getCategoriesJSON(): Observable<any> {
    return this.http.get(this.categories_jsonURL);
   }


}
