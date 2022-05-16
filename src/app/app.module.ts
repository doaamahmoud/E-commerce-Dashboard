import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { BodyComponent } from './Components/body/body.component';
import { MyDirectiveDirective } from './Directives/my-directive.directive';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './Components/products/products.component';
import { CategoryComponent } from './Components/category/category.component';
import { OrderComponent } from './Components/order/order.component';
import { OrderDetailesComponent } from './Components/order-detailes/order-detailes.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { TableComponent } from './Components/table/table.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';
import { UpdateCategoryComponent } from './Components/update-category/update-category.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BodyComponent,
    MyDirectiveDirective,
    ProductsComponent,
    CategoryComponent,
    OrderComponent,
    OrderDetailesComponent,
    HomeComponent,
    TableComponent,
    AddProductComponent,
    AddCategoryComponent,
    UpdateProductComponent,
    UpdateCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
