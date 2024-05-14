import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AloComponent } from './alo/alo.component';
import { CoeComponent } from './coe/coe.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alo', component: AloComponent },
  { path: 'coe', component: CoeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
