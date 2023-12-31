import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectItemComponent } from '../project-item/project-item.component';
import { ImageComponent } from '../image/image.component';
import { ImgUrl } from '../img-url';
import { ProjectsService } from '../projects.service';
import { Projects } from '../projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,ProjectItemComponent,ImageComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  @Input()projectItems!:Projects[];
  
}
