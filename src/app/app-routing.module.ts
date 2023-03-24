import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { FirstComponent } from './components/first/first.component';

const routes: Routes = [
  {
    path:"",
    component:FirstComponent
  },
  {
    path:"edit/:id",
    component:EditComponent
  },
  {
    path:"create",
    component:CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
