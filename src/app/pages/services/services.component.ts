import { Component } from '@angular/core';
import {environment} from "../../../environments/environment.stage";
import {ContactApiService} from "../../shared/contact.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  protected readonly environment = environment;
}
