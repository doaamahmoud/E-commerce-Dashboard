
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NUProduct } from '../ViewModels/nuproduct';

@Injectable({
  providedIn: 'root'
})
export class NUProductService {

  private httpOptions
  constructor(private httpClient:HttpClient) {
      this.httpOptions={
        headers: new HttpHeaders({
          'Content-Type': 'multipart/form-data'
        })
      }
    }
  addProduct(Newproduct:NUProduct):Observable<NUProduct>
  {
    return this.httpClient.post<NUProduct>(`${environment.APIBaseURL}/Products`, JSON.stringify(Newproduct),this.httpOptions);
  }
}
