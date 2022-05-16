import { DecimalPipe } from "@angular/common";
import { IProduct } from "./iproduct";

export interface Order {

    id:number;
    productId:number;
    productQuantity:number;
    productPrice:DecimalPipe;
}
