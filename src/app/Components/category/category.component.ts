import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { ICategory } from 'src/app/ViewModels/icategory';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  selectedCatID:number;
  CatList:ICategory[];
  constructor( private CategoryService:CategoryService,private router:Router) {
    this.CatList=[];
    this.selectedCatID=0;
   }

  ngOnInit(): void {
  this.CategoryService.getAllCateogories().subscribe(data=>{
    console.log(data);
    this.CatList=data;
   
  })
}
DeleteCategory(id:number){
  this.CategoryService.DeleteCategory(id).subscribe();
}
}
