import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { CategoryComponent } from './Components/category/category.component';
import { HomeComponent } from './Components/home/home.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { OrderDetailesComponent } from './Components/order-detailes/order-detailes.component';
import { OrderComponent } from './Components/order/order.component';
import { ProductsComponent } from './Components/products/products.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';

const routes: Routes = [
  
  // {path:'',component:LayoutComponent, children:[
    
    {path:'',redirectTo:'/Home', pathMatch:'full'},
    {path:'Home', component:HomeComponent},
    {path:'products', component:ProductsComponent},
    {path:'Order', component:OrderComponent},
    {path:'OrdersDetailes',component:OrderDetailesComponent},
    {path:'category', component:CategoryComponent},
    {path:'UpdateProduct/:pid', component:UpdateProductComponent},
    // {path:'category/:pid', component:AddProductComponent},

    

  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
