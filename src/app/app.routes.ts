import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AloComponent } from './alo/alo.component';
import { CoeComponent } from './coe/coe.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogComponent } from './blog/blog.component';
import { FullComponent } from './layout/full/full.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'FullComponent', component: FullComponent },
  { path: 'alo', component: AloComponent },
  { path: 'coe', component: CoeComponent },
  { path: 'blogDetail/:id', component: BlogDetailComponent },
  { path: 'blogDetail', component: BlogComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
