import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})

export class BannerComponent implements OnInit {
  image: string = "https://i.glbimg.com/og/ig/infoglobo1/f/original/2016/11/23/teste.jpg"

  constructor() { }

  ngOnInit(): void {
  }


}
