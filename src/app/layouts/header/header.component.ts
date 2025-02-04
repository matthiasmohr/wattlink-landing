import {HostListener, Component} from '@angular/core';
import {environment} from "../../../environments/environment.stage";

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected readonly environment = environment;

  isShrunk = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isShrunk = window.scrollY > 100; // Ab 100px Scrollen wird der Header verkleinert
  }
}
