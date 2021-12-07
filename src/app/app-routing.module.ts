import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FromComponent} from './components/from/from.component'

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'location', component: FromComponent},
  {path: '**', component: FromComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
