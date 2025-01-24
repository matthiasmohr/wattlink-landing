import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {environment} from "../../../environments/environment.stage";
import bootstrap from "../../../main.server";

@Component({
  selector: 'app-offcanvas-menu',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './offcanvas-menu.component.html',
  styleUrl: './offcanvas-menu.component.scss'
})
export class OffcanvasMenuComponent {

  protected readonly environment = environment;

}
