import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { NUProductService } from 'src/app/Services/nuproduct.service';
import { ProductService } from 'src/app/Services/product.service';
import { ICategory } from 'src/app/ViewModels/icategory';
import { IProduct } from 'src/app/ViewModels/iproduct';
import { NUProduct } from 'src/app/ViewModels/nuproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  newPrdoudct: IProduct={} as IProduct;
  catList: ICategory[]=[];
  constructor(private cateServ:CategoryService,private prodServ:ProductService , private router:Router , private newproductServ:NUProductService) { 
  }
  ngOnInit(): void {
    this.cateServ.getAllCateogories().subscribe(categoryList=>{
      this.catList=categoryList;
    })
  }
  onFileChange(event:any) {
  const reader = new FileReader();
    console.log(reader);
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.newPrdoudct.image = reader.result as string;
      };
    }
  }
  saveProduct()
  {
    console.log(this.newPrdoudct);
    this.prodServ.addProduct(this.newPrdoudct).subscribe(prd=>{
      // this.router.navigate(['']);
      // console.log(this.newPrdoudct);
    });
  }

}

 

