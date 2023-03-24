import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { __asyncValues } from 'tslib';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  postData: any;

  constructor(private _apiservice: ApiserviceService, private route: Router) {
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this._apiservice.getAllData().subscribe((data: any) => {
      console.log(data);
      this.postData = data;
    },(err: any) => console.log(err))
  }

  editPost(id: number) {
    console.log(id);
    this.route.navigate([`/edit/${id}`])
  }

  deletePost(id: number) {
    this._apiservice.deletePost(id).subscribe((data: any) => {
      console.log(data);
    },(err: any) => console.log(err))
  }


}
