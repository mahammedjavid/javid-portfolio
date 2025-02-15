import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { filter } from 'rxjs';

interface ContentSection {
  title: string;
  content: string[];
  code?: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  dynamicFolderOpen = {
    bio: true,
    experience: false,
    achivement: false,
    interest: false,
    education: false,
    skills: false
  };

  selectedSubNavItem: string = 'personal-info';

  constructor(private __router: Router, private loader: NgxUiLoaderService) {}

  ngOnInit(): void {
    this.loader.start()
    this.getCurrentURL();
    this.__router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.getCurrentURL();
      });
    if (window.innerWidth < 640) {
      this.collapsed = false
    }
  }

  selectNavItem(item: string): void {
    this.selectedSubNavItem = item;
    this.__router.navigate([`_about-me/${item}`]);
  }

  getCurrentURL() {
    const route = this.__router.url.slice(1);
    this.selectedSubNavItem = route.split('_about-me/')[1];
    this.getDummyFunctionName();
  }

  DummyFunctionName: any;

  getDummyFunctionName() {
    this.loader.stop()
    switch (this.selectedSubNavItem) {
      case 'personal-info':
        this.dynamicFolderOpen.bio = true;
        this.DummyFunctionName = 'personalInfo';
        break;
      case 'summary':
        this.dynamicFolderOpen.bio = true;
        this.DummyFunctionName = 'summaryData';
        break;
      case 'experience':
        this.dynamicFolderOpen.experience = true;
        this.DummyFunctionName = 'experienceData';
        break;
      case 'education':
        this.dynamicFolderOpen.education = true;
        this.DummyFunctionName = 'educationData';
        break;
      case 'achivement':
        this.dynamicFolderOpen.achivement = true;
        this.DummyFunctionName = 'achivementData';
        break;
      case 'interest':
        this.dynamicFolderOpen.interest = true;
        this.DummyFunctionName = 'interestData';
        break;
      case 'skills':
        this.dynamicFolderOpen.skills = true;
        this.DummyFunctionName = 'skillData';
        break;
      default:
        break;
    }
  }

  open_curly_braces = '{';
  openBraces = '(';
  closeBraces = ')';
  close_curly_braces = '}';
  collapsed = true

  toggleSideBar() {
    this.collapsed = !this.collapsed
    const sidebar = document.querySelector('.sidebar')
    sidebar?.classList.toggle('collapsed')
  }

  toggleFolder(folder: keyof typeof this.dynamicFolderOpen): void {
    this.dynamicFolderOpen[folder] = !this.dynamicFolderOpen[folder];
    
    if (this.dynamicFolderOpen[folder]) {
      let route = '';
      switch(folder) {
        case 'bio':
          route = 'personal-info';
          break;
        case 'experience':
          route = 'experience';
          break;
        case 'achivement':
          route = 'achivement';
          break;
        case 'interest':
          route = 'interest';
          break;
        case 'education':
          route = 'education';
          break;
        case 'skills':
          route = 'skills';
          break;
      }
      if (route) {
        this.selectNavItem(route);
      }
    }
  }

  formatContent(content: string): string {
    return content.replace(/\/\*|\*\/|\/\//g, '').trim();
  }

  getCurrentContent(): ContentSection {
    switch (this.selectedSubNavItem) {
      case 'personal-info':
        return {
          title: 'Personal Information',
          content: [
            'const personalInfo = {',
            '  name: "Mahammed Javid",',
            '  role: "Full Stack Developer",',
            '  location: "Kaup, Karnataka, India",',
            '  email: "javid.connect@gmail.com",',
            '  phone: "+91 9964194276",',
            '  about: "Passionate developer with expertise in Angular and Python",',
            '  languages: ["English", "Kannada", "Hindi", "Urdu"]',
            '};'
          ]
        };

      case 'experience':
        return {
          title: 'Professional Experience',
          content: [
            'const experience = [',
            '  {',
            '    role: "Associate Software Engineer",',
            '    company: "Pace Wisdom Solution",',
            '    duration: "DEC 2022 - Present",',
            '    location: "Mangalore, India",',
            '    highlights: [',
            '      "Developed full-stack applications using Angular and Python",',
            '      "Led development of Samhita project modules",',
            '      "Implemented Skilling Pathway and Credit Guarantee features",',
            '      "Utilized Scrum methodology for project management"',
            '    ]',
            '  },',
            '  {',
            '    role: "Production Planning Engineer",',
            '    company: "Autoliv India Pvt Ltd",',
            '    duration: "APR 2022 - SEP 2022",',
            '    location: "Bangalore, India",',
            '    highlights: [',
            '      "Managed Seatbelt & Airbag production planning",',
            '      "Implemented Kanban methodology",',
            '      "Optimized procurement processes"',
            '    ]',
            '  }',
            '];'
          ]
        };

      case 'skills':
        return {
          title: 'Technical Skills',
          content: [
            'const skills = {',
            '  frontend: {',
            '    frameworks: ["Angular", "React"],',
            '    languages: ["TypeScript", "JavaScript", "HTML5", "CSS3"],',
            '    styling: ["SCSS", "Bootstrap", "Material UI"]',
            '  },',
            '  backend: {',
            '    languages: ["Python", "Node.js"],',
            '    frameworks: ["Django", "Flask", "Express"],',
            '    databases: ["MongoDB", "PostgreSQL", "MySQL"]',
            '  },',
            '  tools: [',
            '    "Git", "Docker", "Jira",',
            '    "VS Code", "Postman", "AWS"',
            '  ],',
            '  methodologies: [',
            '    "Agile", "Scrum", "CI/CD"',
            '  ]',
            '};'
          ]
        };

      case 'education':
        return {
          title: 'Education',
          content: [
            'const education = [',
            '  {',
            '    degree: "Bachelor of Engineering",',
            '    major: "Mechanical Engineering",',
            '    institution: "Sahyadri College of Engineering",',
            '    location: "Mangalore",',
            '    duration: "2018 - 2022",',
            '    achievements: [',
            '      "CGPA: 7.8/10",',
            '      "Active member of college technical team"',
            '    ]',
            '  }',
            '];'
          ]
        };

      case 'interest':
        return {
          title: 'Interests & Activities',
          content: [
            'const interests = {',
            '  technical: [',
            '    "Web Development",',
            '    "System Architecture",',
            '    "UI/UX Design",',
            '    "Open Source Contributing"',
            '  ],',
            '  hobbies: [',
            '    "Photography",',
            '    "Reading Tech Blogs",',
            '    "Problem Solving",',
            '    "Fitness"',
            '  ],',
            '  learning: [',
            '    "Cloud Architecture",',
            '    "DevOps Practices",',
            '    "Mobile Development"',
            '  ]',
            '};'
          ]
        };

      case 'achivement':
        return {
          title: 'Achievements',
          content: [
            'const achievements = [',
            '  {',
            '    technical: [',
            '      "Led development of key features in Samhita project",',
            '      "Optimized application performance by 40%",',
            '      "Implemented automated testing reducing bugs by 60%"',
            '    ],',
            '    certifications: [',
            '      "AWS Certified Developer Associate",',
            '      "Angular Advanced Certification",',
            '      "Python Professional Certification"',
            '    ],',
            '    recognition: [',
            '      "Best Performer Award - Q2 2023",',
            '      "Innovation Champion - Pace Wisdom"',
            '    ]',
            '  }',
            '];'
          ]
        };

      default:
        return { title: '', content: [] };
    }
  }
}
