import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAppComponent } from './form-app/form-app.component';

const routes: Routes = [
  { path: 'form', component: FormAppComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
