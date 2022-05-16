import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { IProduct } from 'src/app/ViewModels/iproduct';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  Products:IProduct[];
  constructor(private ProductService:ProductService , private router:Router ,private San:DomSanitizer) {
    this.Products=[];
   }

  ngOnInit(): void {

    this.ProductService.getAllProducts().subscribe(data=>{
      console.log(data);
      this.Products=data;
      // this. Products.forEach(element => {
      //   element.url=this.San.bypassSecurityTrustUrl('data:image/png;base64,'+element.image)
      // });
    })
  }


}
