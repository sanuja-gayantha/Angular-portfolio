import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectItemComponent } from '../project-item/project-item.component';
import { ImageComponent } from '../image/image.component';
import { ImgUrl } from '../img-url';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,ProjectItemComponent,ImageComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  imgUrl: ImgUrl = {
    url_link: '../../assets/images/me.webp',
    alt_text: 'me.webp',
    text:'# Sanuja  # Developer'
  }
}
