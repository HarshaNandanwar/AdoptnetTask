import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  createPost = new FormGroup({
    userId: new FormControl(''),
    title: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required)
  })

  constructor(private _apiservice: ApiserviceService, private route: Router) {

  }


  onUserIdChange(event: any) {
    console.log(event.target.value);
  }

  addPost() {
    let data = this.createPost.value;
    console.log(data);
    this._apiservice.createPost(data).subscribe((data:any) => {
      console.log(data);

    },(err: any) => console.log(err));
    this.route.navigate(['/']);
  }

}
