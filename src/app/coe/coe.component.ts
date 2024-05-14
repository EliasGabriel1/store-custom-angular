import { Component } from '@angular/core';
import { FooterModule } from '../shared/footer/footer.module';

@Component({
  selector: 'app-coe',
  standalone: true,
  imports: [FooterModule],
  templateUrl: './coe.component.html',
  styleUrl: './coe.component.css'
})
export class CoeComponent {

}
