// home.component.ts
import { Component, OnInit } from '@angular/core';
import { FooterModule } from '../shared/footer/footer.module';
import { BannerComponent } from '../shared/banner/banner.component';
import { DataService } from "../../services/data.service"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule, BannerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    const menu = this.dataService.getMenu();
    console.log(menu);
  }
}
