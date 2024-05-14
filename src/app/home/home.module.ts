import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from '../shared/footer/footer.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from '../shared/banner/banner.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FooterModule,
    BannerComponent
  ]
})
export class HomeModule { }
