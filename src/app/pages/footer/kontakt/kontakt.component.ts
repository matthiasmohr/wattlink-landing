import {Component, OnInit} from '@angular/core';
import {ContactApiService} from "../../../shared/contact.service";
import {FormsModule, NgForm} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss'
})
export class KontaktComponent{
  constructor(private contactApiService: ContactApiService) {}

  contactBody: {
      name: string;
      email: string;
      telefon?: string;
      firma?: string;
      message?: string;
    } = {
      name: '',
      email: '',
      telefon: '',
      firma: '',
      message: ''
  };
  isError = false
  isSuccess = false

  sendContactRequest(contactForm: NgForm) {
    if (contactForm.valid) {
      // Logik zum Senden der Anfrage
      this.contactApiService.postContact(this.contactBody).subscribe(res => {
        this.isSuccess = true
      })
      console.log('Form submitted:', this.contactBody);
    } else {
      console.log('Form is invalid!');
    }
  }
}
