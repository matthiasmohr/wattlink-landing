import { Component } from '@angular/core';
import {environment} from "../../../environments/environment.stage";

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly environment = environment;
}
