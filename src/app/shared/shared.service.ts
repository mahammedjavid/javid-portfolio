import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private loader: NgxUiLoaderService) {}
  colors = [
    '#607B96',
    '#3C9D93',
    '#4D5BCE',
    '#FFFFFF',
    '#5565E8',
    '#FEA55F',
    '#43D9AD',
    '#E99287',
    '#C98BDF',
    '#1E2D3D',
    '#4D5BCE',
    '#43D9AD',
  ];
  getSkills() {
    const skills = {
      frontend: [
        {
          name: 'HTML',
          color: '#FF5733',
          image: '../../assets/techStack/icons8-html.svg',
        },
        {
          name: 'CSS',
          color: '#33FF57',
          image: '../../assets/techStack/icons8-css.svg',
        },
        {
          name: 'Ionic',
          color: '#33FFC7',
          image: '../../assets/techStack/icons8-ionic.svg',
        },
        {
          name: 'Angular',
          color: '#5733FF',
          image: '../../assets/techStack/icons8-angular.svg',
        },
        {
          name: 'Bootstrap',
          color: '#FFC733',
          image: '../../assets/techStack/icons8-bootstrap.svg',
        },
        {
          name: 'JavaScript',
          color: '#FF5733',
          image: '../../assets/techStack/icons8-js.svg',
        },
      ],
      backend: [
        {
          name: 'Nest.js',
          color: '#5733FF',
          image: '../../assets/techStack/icons8-nestjs.svg',
        },
        {
          name: 'Node.js',
          color: '#57FF33',
          image: '../../assets/techStack/icons8-nodejs.svg',
        },
        {
          name: 'Express.js',
          color: '#FFC733',
          image: '../../assets/techStack/icons8-express-js.svg',
        },
      ],
      database: [
        {
          name: 'SQL',
          color: '#33FFC7',
          image: '../../assets/techStack/icons8-sql-64.png',
        },
        {
          name: 'MySQL',
          color: '#FFC733',
          image: '../../assets/techStack/icons8-mysql.svg',
        },
        {
          name: 'MongoDB',
          color: '#FF5733',
          image:
            '../../assets/techStack/icons8-mongodb-a-cross-platform-document-oriented-database-program-24.png',
        },
        {
          name: 'PostgreSQL',
          color: '#5733FF',
          image: '../../assets/techStack/icons8-postgresql.svg',
        },
      ],
      tools: [
        {
          name: 'Git',
          color: '#33FF57',
          image: '../../assets/techStack/icons8-git.svg',
        },
        {
          name: 'GitLab',
          color: '#FFC733',
          image: '../../assets/techStack/icons8-gitlab.svg',
        },
        {
          name: 'GitHub',
          color: '#33FFC7',
          image: '../../assets/techStack/icons8-github.svg',
        },
        {
          name: 'VS Code',
          color: '#FF5733',
          image: '../../assets/techStack/icons8-vs-code.svg',
        },
      ],
    };

    return skills;
  }
  getProjects() {
    const projects = [
      {
        name: 'E-Commerce Website',
        description: `Developed a full-stack e-commerce website, including bulk product upload features.
        - Managed end-to-end aspects of the e-commerce site, showcasing expertise in frontend and backend development.`,
        image: 'path_to_ecommerce_image',
        techStach_image: [
          '../../assets/icons/angular.png',
          '../../assets/techStack/icons8-express-js (5).svg',
        ],
        status: 'In Progress',
        link: null,
      },
      {
        name: 'Travel App',
        description: `Developed a travel mobile app using Ionic during the training period at Pacewisdom.
        - Utilized Capacitor and Android Studio to create a mobile APK for seamless user experience.`,
        image: 'path_to_travel_app_image',
        techStach_image: ['../../assets/techStack/icons8-ionic.svg'],
        status: 'Live',
        link: null,
      },
      {
        name: 'Leave Management System',
        description: `The Leave Management System is an Angular-based web application designed for administrators to efficiently handle user leave requests. It implements Role-Based Access Control (RBAC) with two distinct user roles: Admin and regular users. Admins have access to a comprehensive set of features including user creation, leave request approval/rejection, holiday management, and leave listing. On the other hand, regular users are limited to viewing the holiday listing and checking the status of their leave applications. The system also enables users to apply for leaves, specifying type, start and end dates, along with additional comments. Admins can review, approve or reject these requests based on company policies. Additionally, the system allows admins to manage holidays by creating new ones and performing CRUD operations for both users and holidays. Overall, the Leave Management System provides a user-friendly interface that facilitates effective leave management while ensuring transparency and control over holiday listings and leave requests.`,
        image: 'path_to_travel_app_image',
        techStach_image: ['../../assets/icons/angular.png'],
        status: 'Live',
        link: null,
      },
      {
        name: 'Multi-Module Platform Development',
        description: `I spearheaded the development of a comprehensive multi-module platform, overseeing various components including the Skilling Pathway, Pre-Screen Credit Score (PCS), and Credit Guarantee (CG) projects. The Skilling Pathway module empowered users to effortlessly create resumes, complete courses, and apply for job opportunities. Within the PCS module, I implemented advanced survey functionalities to accurately assess participant credit scores. Additionally, in the CG module, I designed a robust system enabling participants to apply for loans based on agent-assessed survey points, covering key aspects such as disbursement, repayment, and claims processes. In my role, I also took charge of managing diverse modules within the project, overseeing frontend logic, UI enhancements, and more. To elevate user experience and functionality, I leveraged a range of specialized packages.`,
        image: 'path_to_samhita_image',
        techStach_image: ['../../assets/icons/angular.png'],
        status: 'Live',
        link: null,
      },
      {
        name: 'Weather Application',
        description: `The Weather Application is a user-friendly web platform that provides real-time updates on current weather conditions. It gives users accurate information about temperature, humidity, wind speed, and more for their current location. The interface is designed to be intuitive, displaying the weather details prominently. Users can easily access the most recent and relevant weather data.`,
        image: 'path_to_travel_app_image',
        techStach_image: ['../../assets/techStack/icons8-js.svg'],
        status: 'Live',
        link: null,
      },
      {
        name: 'Flipkart Clone',
        description: `The Flipkart Clone is a web application.Developed using JavaScript and gives users a smooth and interactive experience. It uses a tool called Local Storage to keep track of what users do, like adding or removing items from their shopping cart. This application has a smart search and filter feature, helping users quickly find the products they want in a big list. The design is user-friendly, showing pictures, prices, and availability of products.It is responsive for all the devices.`,
        image: 'path_to_travel_app_image',
        techStach_image: ['../../assets/techStack/icons8-js.svg'],
        status: 'Live',
        link: null,
      },
      {
        name: 'Development of wild animal ward off system : Crop Protector',
        description: `As we know Surveillance plays a major role in many fields be it at home, hospitals, schools, public places, farmlands etc. It helps us to monitor a certain area and prevent theft and also provides proof of evidence. In the case of farmlands or agricultural lands surveillance is very important to prevent unauthorized people from gaining access to the area as well as to protect the area from animals.
        The image processing techniques /night vision cameras /IOT technologies will surely provide solution to these problems. Various methods aim only at surveillance which is mainly for human intruders, but we tend to forget that the main enemies of such farmers are the animals which destroy the crops. This leads to poor yield of crops and significant financial loss to the owners of the farmland. This problem is so pronounced that sometimes the farmers decide to leave the areas barren due to such frequent animal attacks. This system helps us to keep away such wild animals from the farmlands as well as provides surveillance functionality.`,
        image: 'path_to_travel_app_image',
        techStach_image: ['../../assets/techStack/icons8-iot-32.png'],
        status: 'Live',
        link: null,
      },
    ];

    return projects;
  }
  staticLoader(){
    this.loader.start() 
    setTimeout(() => {
      this.loader.stop()
    }, 70);
  }
}
