import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoeComponent } from './coe.component';
import { FooterModule } from '../shared/footer/footer.module';


@NgModule({
  declarations: [CoeComponent],
  imports: [
    CommonModule,
    FooterModule
  ]
})
export class CoeModule { }
