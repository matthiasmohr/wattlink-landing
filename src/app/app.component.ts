import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutsModule} from "./layouts/layouts.module";
import { OffcanvasMenuComponent } from "./layouts/offcanvas-menu/offcanvas-menu.component";
import { GoogleAnalyticsService } from "./shared/googleanalytics.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutsModule, OffcanvasMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'stromify-landing';

  constructor(private gaService: GoogleAnalyticsService) {}

  ngOnInit(): void {
    const trackingId = 'G-7MN7XNRN4B'; // Dynamisch laden, z.B. aus einer Konfigurationsdatei oder API
    this.gaService.initialize(trackingId);
  }
}
