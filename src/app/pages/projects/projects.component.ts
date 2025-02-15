import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
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
export class ProjectsComponent implements OnInit {
  constructor(private sharedService: SharedService) {}
  projects = this.sharedService.getProjects();

  ngOnInit(): void {
    this.sharedService.staticLoader();
  }
}
