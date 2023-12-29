import { Injectable } from '@angular/core';
import { Projects } from './projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projectItemsList: Projects[] = [
    {
      projectID: 1,
      projectName: 'Snacks brand',
      imageUrl: 'https://i.ibb.co/Tt9KRvZ/Snacks-brand.webp',
      githubUrl: 'https://github.com/sanuja-gayantha/Snacks-brand',
      demoUrl: 'https://snacks-brand.netlify.app/',
      desc1: 'Did you know that the fortune cookie, often associated with Chinese cuisine, actually originated in California, not in China?',
      desc2: 'This is a small business website that sells snacks and cookies. customers can order their favorite flavors online.',
      techStack: [
        {
          stackName: 'Angular',
          stackUrl: '../../assets/images/angular.svg'
        },
        {
          stackName: 'Typescript',
          stackUrl: '../../assets/images/typescript.svg'
        },
        {
          stackName: 'Tailwindcss',
          stackUrl: '../../assets/images/tailwindcss.svg'
        },
        {
          stackName: 'CSS3',
          stackUrl: '../../assets/images/css3.svg'
        }
      ]
    },
    {
      projectID: 2,
      projectName: 'EShop',
      imageUrl: 'https://i.ibb.co/LQGkdFB/Screenshot-2023-12-30-at-00-33-26-ESHOP.webp',
      githubUrl: 'https://github.com/sanuja-gayantha/Ecommerce-fashion',
      demoUrl: 'https://eshop-ecommerce-fashion.netlify.app/',
      desc1: 'Did you know? The first online retail transaction occurred in 1994 when a Sting CD was sold on NetMarket, marking the inception of ecommerce in the fashion industry.',
      desc2: 'This fashion ecommerce website 🛍️ provides a seamless shopping experience, allowing customers to effortlessly explore and buy a wide range of trendy products.',
      techStack: [
        {
          stackName: 'Angular',
          stackUrl: '../../assets/images/angular.svg'
        },
        {
          stackName: 'Typescript',
          stackUrl: '../../assets/images/typescript.svg'
        },
        {
          stackName: 'Tailwindcss',
          stackUrl: '../../assets/images/tailwindcss.svg'
        },
        {
          stackName: 'CSS3',
          stackUrl: '../../assets/images/css3.svg'
        }
      ]
    },
    {
      projectID: 3,
      projectName: 'Scooters',
      imageUrl: 'https://i.ibb.co/pv4G2Xj/Electric-cooters.webp',
      githubUrl: 'https://github.com/sanuja-gayantha/Electric-scooters',
      demoUrl: 'https://electric-scooters.netlify.app/',
      desc1: 'Did you know that the first patent for an electric bicycle, a precursor to modern electric scooters, was filed in the late 19th century by Hosea W. Libbey?',
      desc2: 'This digital storefront showcases an extensive range of cutting-edge electric scooters, along with an assortment of top-tier accessories meticulously curated for an enhanced riding experience.',
      techStack: [
        {
          stackName: 'Angular',
          stackUrl: '../../assets/images/angular.svg'
        },
        {
          stackName: 'Typescript',
          stackUrl: '../../assets/images/typescript.svg'
        },
        {
          stackName: 'Tailwindcss',
          stackUrl: '../../assets/images/tailwindcss.svg'
        }
      ]
    },
    
    {
      projectID: 4,
      projectName: 'Moroccan shop',
      githubUrl: 'https://github.com/sanuja-gayantha/Moroccan-shop-frontend',
      techStack: [
        {
          stackName: 'React',
          stackUrl: ''
        },
        {
          stackName: 'SCSS',
          stackUrl: ''
        }
      ]
    },

    {
      projectID: 5,
      projectName: 'Unsplash photo app',
      githubUrl: 'https://github.com/sanuja-gayantha/unsplash-photo-app',
      techStack: [
        {
          stackName: 'React',
          stackUrl: ''
        },
        {
          stackName: 'SCSS',
          stackUrl: ''
        }
      ]
    },

    {
      projectID: 6,
      projectName: 'Easybank landing page',
      githubUrl: 'https://github.com/sanuja-gayantha/Easybank-landing-page',
      techStack: [
        {
          stackName: 'HTML5',
          stackUrl: ''
        },
        {
          stackName: 'SCSS',
          stackUrl: ''
        }
      ]
    },

  ]

  constructor() { }

  getProjectItems():Projects[]{
    return this.projectItemsList;
  }

}
