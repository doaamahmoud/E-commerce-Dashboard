import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import { ICategory } from 'src/app/ViewModels/icategory';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
 newCategory:ICategory={} as ICategory;
  constructor(private newCategoryServ:CategoryService,private router:Router) { }

  ngOnInit(): void {
   
  }
  

  saveCategory(){
    console.log(this.newCategory);
    this.newCategoryServ.addCategory(this.newCategory).subscribe(prd=>{
      // this.router.navigate(['']);
      // console.log(this.newCategory);
    });
  }
}
