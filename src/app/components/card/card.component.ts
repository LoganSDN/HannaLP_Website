import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  backgroundColor!: string;
  
  @Input()
  date!: string;
  
  @Input()
  title!: string;
  
  @Input()
  body!: string;
  
  @Input()
  isText!: boolean;

  @Input()
  profilePicture!: string;


  get day(): string {
    return this.date.split(' ')[0];
  }

  get month(): string {
    return this.date.split(' ')[1];
  }

  get year(): string {
    return this.date.split(' ')[2];
  }
}
