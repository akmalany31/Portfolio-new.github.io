import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  email = "annisahukmu2002@gmail.com";
  whatsappNumber = "6283821625689";
  
  openGmail() {
      alert(`Mail to: ${this.email}`);
      const subject = encodeURIComponent("Hello");
      const body = encodeURIComponent("I want to contact you.");
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${this.email}&su=${subject}&body=${body}`, "_blank");
    }
  
    openWhatsApp() {
      alert(`WhatsApp to: ${this.whatsappNumber}`);
      window.open(`https://wa.me/${this.whatsappNumber}?text=Hi,%20I%20want%20to%20contact%20you!`, "_blank");
    }
}
