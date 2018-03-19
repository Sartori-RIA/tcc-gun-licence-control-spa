import {Attribute, Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({selector: '[scrollTo]'})
export class ScrollToDirective implements OnInit {
  constructor(@Attribute('scrollTo') public elmID: string, private el: ElementRef) {
  }

  ngOnInit() {
  }

  currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
      return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
  };

  elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node: any = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
    }
    return y;
  };

  @HostListener('click', ['$event'])
  smoothScroll() {
    let startY, stopY, distance, speed, step, leapY, timer, i;

    if (!this.elmID)
      return;
    startY = this.currentYPosition();
    stopY = this.elmYPosition(this.elmID);
    distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      scrollTo(0, stopY);
      return;
    }
    speed = Math.round(distance / 2);
    if (speed >= 20) speed = 20;
    step = Math.round(distance / 25);
    leapY = stopY > startY ? startY + step : startY - step;
    timer = 0;
    if (stopY > startY) {
      for (i = startY; i < stopY; i += step) {
        setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
        leapY += step;
        if (leapY > stopY) leapY = stopY;
        timer++;
      }
      return;
    }
    for (i = startY; i > stopY; i -= step) {
      setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
      leapY -= step;
      if (leapY < stopY) leapY = stopY;
      timer++;
    }
    return false;
  };
}
