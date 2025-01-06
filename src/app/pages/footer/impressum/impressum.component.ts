import { Component } from '@angular/core';
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {

  protected readonly environment = environment;
}
