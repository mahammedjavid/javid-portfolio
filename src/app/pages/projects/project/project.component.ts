import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() projectData:any
  @Input() index:any
  viewProject(link:any){
    window.open(link,'_blank')
  }

}
