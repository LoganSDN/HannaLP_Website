import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  isContainerOpened = false;
  cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  toggleContainer(): void {
    this.isContainerOpened = !this.isContainerOpened;
  }
}
