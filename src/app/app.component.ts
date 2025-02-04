import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LayoutsModule} from "./layouts/layouts.module";
import { OffcanvasMenuComponent } from "./layouts/offcanvas-menu/offcanvas-menu.component";
import { GoogleAnalyticsService } from "./shared/googleanalytics.service";
import {environment} from "../environments/environment";

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
    const containerId = environment.marketing.googleAnalytics.containerId;
    if (containerId != null) {
      this.gaService.initialize(containerId);
    }
  }
}
