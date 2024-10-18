import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private loader: NgxUiLoaderService) { }
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
          name: 'JavaScript',
          color: '#FF5733',
          image: '../../assets/techStack/icons8-js.svg',
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
          name: 'Vue.js',
          color: '#5733FF',
          image: '../../assets/techStack/vue.svg',
        },
        {
          name: 'Nuxt.js',
          color: '#5733FF',
          image: '../../assets/techStack/nuxt.svg',
        },
        {
          name: 'Bootstrap',
          color: '#FFC733',
          image: '../../assets/techStack/icons8-bootstrap.svg',
        },
      ],
      backend: [
        {
          name: 'Nest.js',
          color: '#5733FF',
          image: '../../assets/techStack/icons8-nestjs.svg',
        },
        {
          name: 'Flask',
          color: '#5733FF',
          image: '../../assets/techStack/python.png',
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
        {
          name: 'Django',
          color: '#5733FF',
          image: '../../assets/techStack/python.png',
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
          name: 'Azure Devops',
          color: '#FF5733',
          image: '../../assets/techStack/azure-devops-svgrepo-com.svg',
        },
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
      mobile: [
        {
          name: 'Ionic',
          color: '#33FFC7',
          image: '../../assets/techStack/icons8-ionic.svg',
        },
        {
          name: 'Flutter',
          color: '#33FFC7',
          image: '../../assets/techStack/flutter.svg',
        },
      ],
    };

    return skills;
  }
  getProjects() {
    const projects = [
      {
        name: 'E-Commerce Website',
        description: `Developed a comprehensive full-stack e-commerce platform featuring bulk product upload capabilities. 
        - Managed end-to-end development, showcasing expertise in both frontend and backend technologies to create a seamless shopping experience.`,
        image: 'path_to_ecommerce_image',
        techStach_image: [
          '../../assets/icons/angular.png',
          '../../assets/techStack/icons8-express-js (5).svg',
        ],
        status: 'In Progress',
        link: null,
      },
      {
        name: 'Leave Management System',
        description: `Designed and implemented an Angular-based web application for efficient leave management. 
        - Integrated Role-Based Access Control (RBAC) to allow admins to manage user requests effectively, enabling functionalities like leave approval, holiday management, and user creation, while providing regular users with a transparent interface to check their leave status.`,
        image: 'path_to_travel_app_image',
        techStach_image: ['../../assets/icons/angular.png'],
        status: 'Live',
        link: null,
      },
      {
        name: 'Loan Provider App',
        description: `Developed a loan provider application using Angular and Ionic. 
        - Designed with a user-friendly interface to simplify the loan application process, enhancing accessibility for users seeking financial assistance.`,
        image: 'path_to_loan_provider_image',
        techStach_image: ['../../assets/icons/angular.png', '../../assets/techStack/icons8-ionic.svg'],
        status: 'Live',
        link: null,
      },
      {
        name: 'Loan Seeker App',
        description: `Developed a comprehensive Loan Seeker application using Angular and Ionic, integrated with a Django backend.
        - Utilized the Beckn protocol and ONIX server to streamline the loan application process, enhancing user experience and facilitating seamless interactions between borrowers and lenders.`,
        image: 'path_to_loan_seeker_image',
        techStach_image: ['../../assets/icons/angular.png', '../../assets/techStack/icons8-ionic.svg'],
        status: 'Live',
        link: null,
      },
      {
        name: 'Seller Store Project',
        description: `Developed a seller store application that allows users to create and manage their own online stores.
        - Connected to the ONDC network, leveraging Angular for the frontend and Flask for the backend, ensuring a robust and scalable platform for sellers to reach their customers effectively.`,
        image: 'path_to_seller_store_image',
        techStach_image: ['../../assets/icons/angular.png', '../../assets/techStack/python.png'],
        status: 'Live',
        link: null,
      },
      {
        name: 'Health Care Product',
        description: `Developed a comprehensive health care product for providers, creating an entire website and server infrastructure. 
        - Enabled providers to register patients, manage their health records, and access various benefits and insurance options. The platform was designed to enhance user experience and streamline the registration process for optimal health care delivery.`,
        image: 'path_to_ion_health_care_image',
        techStach_image: ['../../assets/techStack/python.png', '../../assets/techStack/nuxt.svg'],
        status: 'Live',
        link: null,
      },
      {
        name: 'Multi-Module Platform Development',
        description: `Led the development of a comprehensive multi-module platform, incorporating various components such as Skilling Pathway, Pre-Screen Credit Score, and Credit Guarantee projects.
        - Empowered users to create resumes, complete courses, and apply for jobs while implementing advanced survey functionalities to accurately assess credit scores. Designed systems for loan applications and claims processes, ensuring user-centric enhancements across the platform.`,
        image: 'path_to_samhita_image',
        techStach_image: ['../../assets/icons/angular.png'],
        status: 'Live',
        link: null,
      },
      {
        name: 'Weather Application',
        description: `Developed a user-friendly web platform providing real-time weather updates. 
        - Delivered accurate information on temperature, humidity, and wind speed, designed with an intuitive interface to enhance user accessibility to critical weather data.`,
        image: 'path_to_travel_app_image',
        techStach_image: ['../../assets/techStack/icons8-js.svg'],
        status: 'Live',
        link: null,
      },
      {
        name: 'Flipkart Clone',
        description: `Created a web application that replicates the Flipkart shopping experience using JavaScript. 
        - Implemented Local Storage for a smooth and interactive user experience, complete with smart search and filter features to help users navigate a vast product catalog efficiently.`,
        image: 'path_to_travel_app_image',
        techStach_image: ['../../assets/techStack/icons8-js.svg'],
        status: 'Live',
        link: null,
      },
      {
        name: 'Crop Protector: Wild Animal Surveillance System',
        description: `Engineered a surveillance system aimed at protecting agricultural lands from wildlife. 
        - Utilized image processing techniques and IoT technologies to deter animals from crops, preventing financial losses for farmers by ensuring secure farmland monitoring.`,
        image: 'path_to_travel_app_image',
        techStach_image: ['../../assets/techStack/icons8-iot-32.png'],
        status: 'Live',
        link: null,
      },
      {
        name: 'Travel App',
        description: `Created a mobile travel application using Ionic during my training at Pacewisdom.
        - Leveraged Capacitor and Android Studio to develop an APK that enhances user experience through intuitive design and functionality.`,
        image: 'path_to_travel_app_image',
        techStach_image: ['../../assets/techStack/icons8-ionic.svg'],
        status: 'Live',
        link: null,
      },

    ];

    return projects;
  }

  staticLoader() {
    this.loader.start()
    setTimeout(() => {
      this.loader.stop()
    }, 70);
  }
  downloadStatisFIle(file: string): void {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', file); // Replace with your local PDF file path
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
