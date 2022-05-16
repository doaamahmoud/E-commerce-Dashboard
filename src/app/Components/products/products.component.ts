import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterState } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit  {
  selectedCatID:number;
  CatList:ICategory [];
  Products:IProduct[];
   todayDate:Date=new Date();
   IsShow:boolean=true;
   constructor( private CategoryService:CategoryService, private ProductService:ProductService , private router:Router ,private San:DomSanitizer) { 
    this.selectedCatID=0;
    this.CatList=[];
    this. Products=[];
   }
  
   ngOnInit(): void {
    this.CategoryService.getAllCateogories().subscribe(data=>{
      console.log(data);
      this.CatList=data;
    })
    this.ProductService.getAllProducts().subscribe(data=>{
      console.log(data);
      this.Products=data;
      // this. Products.forEach(element => {
      //   element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.image)
      // });
    })
  }
  ngOnChanges(changes: SimpleChange): void {

  }
// filter(id:number){
//   this.filtProduct=[];
//  for(var item of this.proList){
//     if(id==item.CateogryID)
//       this.filtProduct.push(item);
//  }
// }
// decres(id:number){
//   for(var item of this.proList){
//     if(id==item.ID)
//     item.Quantity-=Quentity;
//   }
// }
Toggle(){
  this.IsShow=!this.IsShow;
}
showproduct(id:number){
  if(id==0){
    this.ProductService.getAllProducts().subscribe(data=>{
      console.log(data);
      this.Products=data;
      // this. Products.forEach(element => {
      //   // element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.image)
      // });
    })
  }
  else{
  this.ProductService.getProductsByCategoryID(id).subscribe(data=>{
    console.log(data);
    this.Products=data;
    // this. Products.forEach(element => {
    //   element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.image)
    // });
})
}
}
DeleteProduct(id:number){
 this.ProductService.DeleteProduct(id).subscribe();
}
// OpeenProductUpdate(pid:number){
//   this.router.navigate(['/UpdateProduct',pid])
//    }
}


