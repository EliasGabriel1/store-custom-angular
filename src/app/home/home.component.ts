import { Component } from '@angular/core';
import { FooterModule } from '../shared/footer/footer.module';
import { BannerComponent } from '../shared/banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
