import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { trackerAreaComponent } from './trackerArea/app.trackerAreaComponent'
import { homeAreaComponent } from './homeArea/app.homeAreaComponent'

const routes: Routes = [
  { path: '', component: homeAreaComponent },
  { path: 'tracker/meal', component: trackerAreaComponent },
  { path: 'tracker/garbage', component: trackerAreaComponent },
  { path: 'tracker/wholesome', component: trackerAreaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
