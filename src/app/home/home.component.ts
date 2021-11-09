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
  private categories_jsonURL = './assets/categories.json';


 constructor(private http: HttpClient) {
  //getting market place json data 
  this.getMarketPlaceJSON().subscribe(data => {
    this.marketPlaceData = data;
   });
   //getting categories json data
   this.getCategoriesJSON().subscribe(data => {
    this.categoriesData = data;
   });

   console.log("market place data "+this.marketPlaceData)
   
 }
 public getMarketPlaceJSON(): Observable<any> {
  return this.http.get(this.marketPlace_jsonURL);
 }

 public getCategoriesJSON(): Observable<any> {
  return this.http.get(this.categories_jsonURL);
 }


  ngOnInit(): void {
    
  }


  public scrollToCategory(selectedCategory: any){

    if(document.querySelector('#categoryHeader_'+selectedCategory)){
      document.querySelector('#categoryHeader_'+selectedCategory)?.scrollIntoView({ behavior: 'smooth' });
    }else{
      alert('No items avilable for categoryHeader_'+selectedCategory)
    }
    
  }

}
