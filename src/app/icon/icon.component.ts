import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechStacks } from '../tech-stacks';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {

  @Input()stack!:TechStacks;

}
