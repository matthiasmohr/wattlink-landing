import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutsModule} from "./layouts/layouts.module";
import {OffcanvasMenuComponent} from "./layouts/offcanvas-menu/offcanvas-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutsModule, OffcanvasMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stromify-landing';
}
