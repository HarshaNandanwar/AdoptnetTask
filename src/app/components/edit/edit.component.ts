import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  i: number = 0;
  id!: any;

  editPost = new FormGroup({
    id: new FormControl(this.i ? this.i : ""),
    userId: new FormControl(''),
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  })
  constructor(private _apiservice: ApiserviceService, private actRoute: ActivatedRoute, private route: Router) {
  }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.i = this.id;

    this._apiservice.getPostById(this.i).subscribe((data: any) => {
      console.log(data.id);
      this.editPost = new FormGroup({
        id: new FormControl(data.id),
        userId: new FormControl(data.userId),
        title: new FormControl(data.title),
        body: new FormControl(data.body)
      })
    },
      (err: any) => console.log(err));

  }

  onUserIdChange(event: any) {
    console.log(event.target.value);
  }

  updatePost() {
    let data = this.editPost.value;
    console.log(data);
    this._apiservice.editPost(data, this.i).subscribe((data:any) => {
      console.log(data);
    }, (err: any) => console.log(err));
    this.route.navigate(['/']);
  }
}
