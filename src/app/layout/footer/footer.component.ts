import { Component } from '@angular/core';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  social_media = [
    {
      name: 'Twitter',
      image: '../../../assets/icons/icons8-twitter.svg',
      link: environment.TWITTER,
    },
    {
      name: 'Instagram',
      image: '../../../assets/icons/icons8-instagram (1).svg',
      link: environment.INSTAGRAM,
    },
    {
      name: 'Linkdin',
      image: '../../../assets/images/social_10097160.png',
      link: environment.LINKDIN,
    },
  ];
  github = {
    name: '@mahammedjavid8',
    image: '../../../assets/images/github_179323.png',
    link: environment.GITHUB,
  };
}
