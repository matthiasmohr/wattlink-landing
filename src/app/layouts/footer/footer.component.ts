import { Component } from '@angular/core';
import {environment} from "../../../environments/environment.stage";
import {ContactApiService} from "../../shared/contact.service";

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly environment = environment;

  constructor(private contactApiService: ContactApiService) {}

  email: string = ''
  isSuccess = false

  sendNewsletterRequest() {
    this.contactApiService.postNewsletter(this.email).subscribe(res => {
      console.log("Newsletter request was sent succesfully")
      this.isSuccess = true
    })
  }
}
