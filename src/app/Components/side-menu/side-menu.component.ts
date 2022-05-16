import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  Products:IProduct[];
  CatList:ICategory[];
  constructor(private CategoryService:CategoryService,private ProductService:ProductService, private router:Router, private San:DomSanitizer) { 
   this.Products=[];
   this.CatList=[];
  }
  ngOnInit(): void {

    this.CategoryService.getAllCateogories().subscribe(data=>{
   
      this.CatList=data;
    })
    this.ProductService.getAllProducts().subscribe(data=>{
      console.log(data);
      this.Products=data;
      this.Products.forEach(element => {
        element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.image)
      });
    })
  }

}
