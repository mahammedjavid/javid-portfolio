import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { environment } from 'src/environments/environments';
import { AnimationService } from '../../shared/services/animation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0.2 }),
        animate('400ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class HomeComponent implements OnInit{
  @ViewChild('heroSection') heroSection!: ElementRef;
  @ViewChild('terminalContainer') terminalContainer!: ElementRef;

  
  github_link = environment.GITHUB;
  majorTechStack = this.sharedService.getMajorTechStackImage();
  constructor(
    private sharedService: SharedService,
    private animationService: AnimationService,
  ) {}
  categoryList = [
    { name: 'Linux', selected: false },
    { name: 'DevOps', selected: false },
    { name: 'Code', selected: false },
    { name: 'Docker', selected: false },
    { name: 'CMS', selected: false },
  ];

  ngOnInit(): void {
    this.sharedService.staticLoader();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.animationService.initializeTerminalAnimation();
    }, 0);
  }
  downloadResume(){
    const file = '../../../assets/static/mahammed_javid_resume.pdf'
    this.sharedService.downloadStatisFIle(file)
  }
  
}
