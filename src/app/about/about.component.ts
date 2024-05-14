import { Component } from '@angular/core';
// import { ServiceblogService } from '../blog/blog-service.service';

import { FooterModule } from '../shared/footer/footer.module';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent {


  // constructor(public service:ServiceblogService) {
  //   this.service.showEdit=false;

  // }

}
