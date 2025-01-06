import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ProzessComponent} from "./pages/prozess/prozess.component";
import {UeberUnsComponent} from "./pages/ueber-uns/ueber-uns.component";
import {KontaktComponent} from "./pages/footer/kontakt/kontakt.component";
import {ImpressumComponent} from "./pages/footer/impressum/impressum.component";
import {DatenschutzComponent} from "./pages/footer/datenschutz/datenschutz.component";
import {AgbComponent} from "./pages/footer/agb/agb.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'prozess', component: ProzessComponent},
  { path: 'ueberuns', component: UeberUnsComponent},
  // FOOTER
  { path: 'datenschutz', component: DatenschutzComponent},
  { path: 'kontakt', component: KontaktComponent},
  { path: 'impressum', component: ImpressumComponent},
  { path: 'agb', component: AgbComponent},
  // CATCH ALL
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
