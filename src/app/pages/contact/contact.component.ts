import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { environment } from 'src/environments/environments';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class ContactComponent implements OnInit {
  messageSent: any;
  firestore: Firestore = inject(Firestore);
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loader: NgxUiLoaderService,
    private sharedService: SharedService
  ) {}
  form_link = environment.FORM_LINK;
  ngOnInit(): void {
    this.sharedService.staticLoader();
    this.messageSent =
      this.activatedRoute.snapshot.queryParams['kasjk'] == 'jaskjkasj';
  }
  contactFormData = {
    name: '',
    email: '',
    message: '',
    date: this.getTodayDate(),
  };
  sendMessage(form: NgForm) {
    if (form.valid) {
      this.loader.start();
      const collec = collection(this.firestore, 'enquiry');
      addDoc(collec, {
        name: this.contactFormData.name,
        email: this.contactFormData.email,
        message: this.contactFormData.message,
        date: this.contactFormData.date,
      })
        .then(() => {
          this.loader.stop();
          this.router.navigate(['/_contact-me'], {
            queryParams: { kasjk: 'jaskjkasj' },
          });
          this.messageSent = true;
        })
        .catch((error) => {
          this.loader.stop();
          console.error('Error adding document: ', error);
        });
    }
  }
  sendMessageAgain() {
    this.messageSent = false;
    this.contactFormData = {
      name: '',
      email: '',
      message: '',
      date: this.getTodayDate(),
    };
    this.router.navigate(['/_contact-me']);
  }
  getTodayDate() {
    const today = new Date();

    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  }
  open_curly_braces = '{';
  openBraces = '(';
  closeBraces = ')';
  close_curly_braces = '}';
}
