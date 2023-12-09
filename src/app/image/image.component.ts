import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImgUrl } from '../img-url';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent implements OnInit{
  @Input() imgUrl!:ImgUrl;

  ngOnInit(): void {

  }
  
}
