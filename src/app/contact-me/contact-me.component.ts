import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  username: string;
  email: string;
  message: string = '';

  error: any;
  success: any;
  constructor() { }

  sendMessage(){
    if(this.username == '') {
      this.error = 'username is required';
    }
     if(this.email == ''){
      this.error = 'email is required';
    }
    if(this.message == ''){
      this.error = 'message is required';
    }
    if(this.username && this.email && this.message) {
      this.error = '';

      this.success = 'Thank you ' +this.username+ '. Successfully sent'
    }
  }

  ngOnInit() {
  }

}
