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
  getMajorTechStackImage() {
    return [
      {
        name: 'JavaScript',
        image: '../../assets/techStack/icons8-js.svg',
      },
      {
        name: 'TypeScript',
        image: '../../assets/techStack/type.png',
      },
      {
        name: 'Python',
        image: '../../assets/techStack/python.png',
      },
      {
        name: 'SQL',
        image: '../../assets/techStack/sql.png',
      },
      {
        name: 'NoSQL',
        image:
          '../../assets/techStack/nosql.png',
      },
    ];
  }
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
        name: 'AI-Powered Code Review Assistant',
        description: `Developed an intelligent code review system using OpenAI's GPT-4 API and custom fine-tuned models.
        - Implemented automated code quality analysis, security vulnerability detection, and best practice recommendations
        - Built a VS Code extension that provides real-time coding suggestions and documentation
        - Reduced code review time by 60% and improved code quality metrics by 40%`,
        image: '../../assets/projects/ai-code-review.svg',
        techStach_image: [
          '../../assets/techStack/python.svg',
          '../../assets/techStack/tensorflow.svg',
          '../../assets/techStack/vscode.svg',
          '../../assets/techStack/docker.svg'
        ],
        technologies: ['Python', 'TensorFlow', 'VS Code', 'Docker'],
        status: 'Live',
        link: 'https://github.com/yourusername/ai-code-review',
        github: true,
        updatedAt: '2024-03-20',
        version: '1.0.0',
      },
      {
        name: 'Microservices-Based E-Commerce Platform',
        description: `Architected and implemented a scalable e-commerce platform using microservices architecture.
        - Designed event-driven architecture using Apache Kafka for inter-service communication
        - Implemented CI/CD pipeline with Docker, Kubernetes, and GitHub Actions
        - Integrated AI-powered product recommendations and dynamic pricing
        - Achieved 99.99% uptime and handled 10,000+ concurrent users`,
        image: '../../assets/projects/microservices-arch.svg',
        techStach_image: [
          '../../assets/techStack/kubernetes.svg',
          '../../assets/techStack/kafka.svg',
          '../../assets/techStack/docker.svg',
          '../../assets/techStack/github-actions.svg',
          '../../assets/techStack/elastic.svg'
        ],
        technologies: ['Kubernetes', 'Kafka', 'Docker', 'GitHub Actions', 'Elasticsearch'],
        status: 'Live',
        link: 'https://demo-ecommerce.yourdomain.com',
        github: true,
        updatedAt: '2024-03-20',
        version: '1.0.0',
      },
      {
        name: 'ML-Powered Financial Analytics Dashboard',
        description: `Built a comprehensive financial analytics platform with real-time market predictions.
        - Developed machine learning models for stock price prediction and market trend analysis
        - Implemented real-time data processing pipeline using Apache Kafka and Apache Spark
        - Created interactive visualizations using D3.js and WebGL
        - Achieved 85% accuracy in market trend predictions`,
        image: '../../assets/projects/financial-dashboard.svg',
        techStach_image: [
          '../../assets/techStack/tensorflow.svg',
          '../../assets/techStack/d3.svg',
          '../../assets/techStack/spark.svg',
          '../../assets/techStack/webgl.svg'
        ],
        status: 'Live',
        link: 'https://finance-analytics.yourdomain.com',
        github: true,
        updatedAt: '2024-03-20',
        version: '1.0.0',
      },
      {
        name: 'Smart Healthcare Management System',
        description: `Engineered a comprehensive healthcare platform with AI-driven diagnosis assistance.
        - Implemented FHIR-compliant API for electronic health records
        - Developed ML models for early disease detection and risk assessment
        - Integrated blockchain for secure patient data management
        - Reduced diagnosis time by 40% and improved patient data security`,
        image: 'path_to_healthcare_image',
        techStach_image: [
          '../../assets/techStack/nuxt.svg',
          '../../assets/techStack/python.png',
          '../../assets/techStack/tensorflow.png',
          '../../assets/techStack/blockchain.png'
        ],
        technologies: ['Nuxt.js', 'Python', 'TensorFlow', 'Blockchain'],
        status: 'Live',
        link: null,
        updatedAt: '2024-03-20',
        version: '1.0.0',
        github: true
      },
      {
        name: 'Blockchain-Based Loan Management Platform',
        description: `Revolutionized the loan management process using blockchain and smart contracts.
        - Implemented smart contracts using Solidity for automated loan processing
        - Integrated with the Beckn protocol for decentralized loan marketplace
        - Built AI-powered credit scoring system
        - Reduced loan processing time by 70% and improved transparency`,
        image: 'path_to_loan_platform_image',
        techStach_image: [
          '../../assets/icons/angular.png',
          '../../assets/techStack/solidity.png',
          '../../assets/techStack/web3.png'
        ],
        technologies: ['Angular', 'Solidity', 'Web3.js', 'Beckn Protocol'],
        status: 'Live',
        link: 'https://loan-platform.yourdomain.com',
        github: true,
        updatedAt: '2024-03-20',
        version: '1.0.0',
      },
      {
        name: 'Real-Time IoT Analytics Platform',
        description: `Developed an enterprise-grade IoT analytics platform for industrial monitoring.
        - Built real-time data processing pipeline handling 1M+ events per second
        - Implemented predictive maintenance using machine learning
        - Created interactive 3D visualizations for equipment monitoring
        - Reduced equipment downtime by 45%`,
        image: 'path_to_iot_platform_image',
        techStach_image: [
          '../../assets/techStack/python.png',
          '../../assets/techStack/mqtt.png',
          '../../assets/techStack/threejs.png',
          '../../assets/techStack/tensorflow.png'
        ],
        technologies: ['Python', 'TensorFlow', 'MQTT', 'Three.js'],
        status: 'Live',
        link: 'https://iot-analytics.yourdomain.com',
        github: true,
        updatedAt: '2024-03-20',
        version: '1.0.0',
      },
      {
        name: 'E-Commerce Website',
        description: `Developed a comprehensive full-stack e-commerce platform featuring bulk product upload capabilities. 
        - Managed end-to-end development, showcasing expertise in both frontend and backend technologies to create a seamless shopping experience.`,
        image: 'path_to_ecommerce_image',
        techStach_image: [
          '../../assets/icons/angular.png',
          '../../assets/techStack/icons8-express-js (5).svg',
        ],
        technologies: ['Angular', 'Express.js', 'MongoDB', 'Stripe'],
        status: 'In Progress',
        link: null,
        updatedAt: '2024-03-20',
        version: '1.0.0',
      },
      {
        name: 'Leave Management System',
        description: `Designed and implemented an Angular-based web application for efficient leave management. 
        - Integrated Role-Based Access Control (RBAC) to allow admins to manage user requests effectively, enabling functionalities like leave approval, holiday management, and user creation, while providing regular users with a transparent interface to check their leave status.`,
        image: 'path_to_travel_app_image',
        techStach_image: ['../../assets/icons/angular.png'],
        technologies: ['Angular', 'MongoDB', 'Stripe'],
        status: 'Live',
        link: null,
        updatedAt: '2024-03-20',
        version: '1.0.0',
      },
      {
        name: 'Loan Provider App',
        description: `Developed a loan provider application using Angular and Ionic. 
        - Designed with a user-friendly interface to simplify the loan application process, enhancing accessibility for users seeking financial assistance.`,
        image: 'path_to_loan_provider_image',
        techStach_image: [
          '../../assets/icons/angular.png',
          '../../assets/techStack/icons8-ionic.svg',
        ],
        technologies: ['Angular', 'Ionic'],
        status: 'Live',
        link: null,
        updatedAt: '2024-03-20',
        version: '1.0.0',
      },
      {
        name: 'Loan Seeker App',
        description: `Developed a comprehensive Loan Seeker application using Angular and Ionic, integrated with a Django backend.
        - Utilized the Beckn protocol and ONIX server to streamline the loan application process, enhancing user experience and facilitating seamless interactions between borrowers and lenders.`,
        image: 'path_to_loan_seeker_image',
        techStach_image: [
          '../../assets/icons/angular.png',
          '../../assets/techStack/icons8-ionic.svg',
        ],
        technologies: ['Angular', 'Ionic', 'Django', 'Beckn Protocol', 'ONIX Server'],
        status: 'Live',
        link: null,
        updatedAt: '2024-03-20',
        version: '1.0.0',
      },
      {
        name: 'Seller Store Project',
        description: `Developed a seller store application that allows users to create and manage their own online stores.
        - Connected to the ONDC network, leveraging Angular for the frontend and Flask for the backend, ensuring a robust and scalable platform for sellers to reach their customers effectively.`,
        image: 'path_to_seller_store_image',
        techStach_image: [
          '../../assets/icons/angular.png',
          '../../assets/techStack/python.png',
        ],
        technologies: ['Angular', 'Flask', 'OND', 'Flutter'],
        status: 'Live',
        link: null,
        updatedAt: '2024-03-20',
        version: '1.0.0',
      },
      {
        name: 'Health Care Product',
        description: `Developed a comprehensive health care product for providers, creating an entire website and server infrastructure. 
        - Enabled providers to register patients, manage their health records, and access various benefits and insurance options. The platform was designed to enhance user experience and streamline the registration process for optimal health care delivery.`,
        image: 'path_to_ion_health_care_image',
        techStach_image: [
          '../../assets/techStack/python.png',
          '../../assets/techStack/nuxt.svg',
        ],
        technologies: ['Python', 'Nuxt.js', 'Flask', 'Flutter'],
        status: 'Live',
        link: null,
        updatedAt: '2024-03-20',
        version: '1.0.0',
      },
      {
        name: 'Multi-Module Platform Development',
        description: `Led the development of a comprehensive multi-module platform, incorporating various components such as Skilling Pathway, Pre-Screen Credit Score, and Credit Guarantee projects.
        - Empowered users to create resumes, complete courses, and apply for jobs while implementing advanced survey functionalities to accurately assess credit scores. Designed systems for loan applications and claims processes, ensuring user-centric enhancements across the platform.`,
        image: 'path_to_samhita_image',
        techStach_image: ['../../assets/icons/angular.png'],
        technologies: ['Angular', 'MongoDB', 'Stripe'],
        status: 'Live',
        link: null,
        updatedAt: '2024-03-20',
        version: '1.0.0',
      },
      {
        name: 'Weather Application',
        description: `Developed a user-friendly web platform providing real-time weather updates. 
        - Delivered accurate information on temperature, humidity, and wind speed, designed with an intuitive interface to enhance user accessibility to critical weather data.`,
        image: 'path_to_travel_app_image',
        techStach_image: ['../../assets/techStack/icons8-js.svg'],
        technologies: ['JavaScript', 'HTML', 'CSS'],
        status: 'Live',
        link: null,
        updatedAt: '2024-03-20',
        version: '1.0.0',
      },
      {
        name: 'Flipkart Clone',
        description: `Created a web application that replicates the Flipkart shopping experience using JavaScript. 
        - Implemented Local Storage for a smooth and interactive user experience, complete with smart search and filter features to help users navigate a vast product catalog efficiently.`,
        image: 'path_to_travel_app_image',
        techStach_image: ['../../assets/techStack/icons8-js.svg'],
        technologies: ['JavaScript', 'HTML', 'CSS'],
        status: 'Live',
        link: null,
        updatedAt: '2024-03-20',
        version: '1.0.0',
      },
      {
        name: 'Crop Protector: Wild Animal Surveillance System',
        description: `Engineered a surveillance system aimed at protecting agricultural lands from wildlife. 
        - Utilized image processing techniques and IoT technologies to deter animals from crops, preventing financial losses for farmers by ensuring secure farmland monitoring.`,
        image: 'path_to_travel_app_image',
        techStach_image: ['../../assets/techStack/icons8-iot-32.png'],
        technologies: ['Python', 'TensorFlow', 'MQTT', 'Three.js'],
        status: 'Live',
        link: null,
        updatedAt: '2024-03-20',
        version: '1.0.0',
      },
      {
        name: 'Travel App',
        description: `Created a mobile travel application using Ionic during my training at Pacewisdom.
        - Leveraged Capacitor and Android Studio to develop an APK that enhances user experience through intuitive design and functionality.`,
        image: 'path_to_travel_app_image',
        techStach_image: ['../../assets/techStack/icons8-ionic.svg'],
        technologies: ['Ionic', 'Capacitor', 'Android Studio'],
        status: 'Live',
        link: null,
        updatedAt: '2024-03-20',
        version: '1.0.0',
      },
    ];

    return projects;
  }

  staticLoader() {
    this.loader.start();
    setTimeout(() => {
      this.loader.stop();
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
