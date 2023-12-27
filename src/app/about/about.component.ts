import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageComponent } from '../image/image.component';
import { ImgUrl } from '../img-url';
import { TechStacks } from '../tech-stacks';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ImageComponent, IconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
  imgUrl: ImgUrl = {
    url_link: '../../assets/images/me.webp',
    alt_text: 'me.webp',
  }

  stacksList: TechStacks[] = [
    {
      stackName: 'html5',
      stackUrl: '../../assets/images/html5.svg'
    },
    {
      stackName: 'css3',
      stackUrl: '../../assets/images/css3.svg'
    },
    {
      stackName: 'javascript',
      stackUrl: '../../assets/images/javascript.svg'
    },
    {
      stackName: 'angular',
      stackUrl: '../../assets/images/angular.svg'
    },
    {
      stackName: 'typescript',
      stackUrl: '../../assets/images/typescript.svg'
    },
    {
      stackName: 'tailwindcss',
      stackUrl: '../../assets/images/tailwindcss.svg'
    }
    ,
    {
      stackName: 'scss',
      stackUrl: '../../assets/images/scss.svg'
    }
    ,
    {
      stackName: 'git',
      stackUrl: '../../assets/images/git.svg'
    }
  ]


}
