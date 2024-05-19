import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent {

  constructor(private elementRef: ElementRef) {}


  @Input() product: any;  
  @Output() viewDetails = new EventEmitter<void>();

  onViewDetails(){  
    this.viewDetails.emit(this.product);  
  }
  

}
