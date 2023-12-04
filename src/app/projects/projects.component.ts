import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectItemComponent } from '../project-item/project-item.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,ProjectItemComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

}
