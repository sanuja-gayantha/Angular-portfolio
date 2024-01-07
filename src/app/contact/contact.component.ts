import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';


import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormsModule, NgForm } from '@angular/forms';
import { Contacts } from '../contacts';
import { Message } from '../message';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent{

  Year: number = new Date().getFullYear();
  contacts:Contacts={
    user_name:'',
    user_email:'',
    message:''
  }
  errors!:Message | null;

  private YOUR_SERVICE_ID:string='service_yxrqmok';
  private YOUR_TEMPLATE_ID:string='template_yhhuqvc'
  private YOUR_PUBLIC_KEY:string='user_1e1EwwXdIiDGQUSvUNGbg'

  async messageDelay(message:Message) {
    this.errors=message;
    setTimeout(()=>{
      this.errors=null;
    }, 8000);
  } 

  public sendEmail(e: Event, contactForm:NgForm) {

    e.preventDefault();
    emailjs.sendForm(this.YOUR_SERVICE_ID, this.YOUR_TEMPLATE_ID, e.target as HTMLFormElement, this.YOUR_PUBLIC_KEY)
      .then((result: EmailJSResponseStatus) => {
        this.messageDelay({id:1, message:'Message sent successfully'})
        contactForm.reset();

      }, (error) => {
        this.messageDelay({id:2, message:error.text})
      });
  }
  


}
