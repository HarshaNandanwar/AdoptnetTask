import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  getAllData(){
    return  this.http.get(`${environment.baseUrl}`);
  }

  getPostById(id:number){
    return  this.http.get(`${environment.baseUrl}/${id}`);
  }

  createPost(data:any){
    return this.http.post(`${environment.baseUrl}`,data);
  }

  editPost(data:any,id:number){
    return this.http.put(`${environment.baseUrl}/${id}`,data);
  }

  deletePost(id:number){
    return this.http.delete(`${environment.baseUrl}/${id}`);
  }

}
