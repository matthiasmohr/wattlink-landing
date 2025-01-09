import { Component } from '@angular/core';
import {environment} from "../../../environments/environment.stage";
import {ContactApiService} from "../../shared/contact.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected readonly environment = environment;
}
