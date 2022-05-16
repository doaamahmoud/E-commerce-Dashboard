import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterState } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  selectedCatID:number;
  CatList:ICategory [];
  Products:IProduct[];
   todayDate:Date=new Date();
   IsShow:boolean=true;
   constructor( private CategoryService:CategoryService, private ProductService:ProductService , private router:Router ,private San:DomSanitizer) { 
    this.selectedCatID=0;
    this.CatList=[];
    this.Products=[];
   }

  ngOnInit(): void {
    this.CategoryService.getAllCateogories().subscribe(data=>{
      console.log(data);
      this.CatList=data;
    })
    this.ProductService.getAllProducts().subscribe(data=>{
      console.log(data);
      this.Products=data;
      // this.Products.forEach(element => {
      //   element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.image)
      // });
    })
  }

}
