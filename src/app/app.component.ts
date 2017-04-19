import {AfterViewInit, Component, ElementRef} from '@angular/core';

declare let jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'app works!';

  constructor( private elRef: ElementRef){

  }

  ngAfterViewInit():any {

    jQuery(this.elRef.nativeElement).find('.button-collapse').sideNav();
    jQuery(this.elRef.nativeElement).find('select').material_select();
    jQuery(this.elRef.nativeElement).find('.scrollspy').scrollSpy();
    jQuery(this.elRef.nativeElement).find('.parallax').parallax();
    jQuery(this.elRef.nativeElement).find('.collapsible').collapsible();
  }
}
