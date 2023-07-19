import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
@ViewChild('navElement', { static: true }) navElementRef!: ElementRef;
  
  ngAfterViewInit() {
    const links = this.navElementRef.nativeElement.querySelectorAll('a');
    const background = this.navElementRef.nativeElement.querySelector('.link-background');

    const clickHandler = (el: any) => {
      links.forEach((link: any) => {
        link.classList.remove('active');
      });
      el.classList.add('active');
    };

    links.forEach((link: any, index: any) => {
      link.addEventListener('click', (e: any) => {
        background.style.transform = `translateY(${71 * index}px)`;
        clickHandler(e.currentTarget);
      });
    });
  }
}
