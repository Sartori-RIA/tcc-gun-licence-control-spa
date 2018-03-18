import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../shared/auth/data.service';

@Component({
  selector: 'app-examinator-home',
  templateUrl: './examinator-home.component.html',
  styleUrls: ['./examinator-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExaminatorHomeComponent implements OnInit {

  currentUserName: string;

  constructor(private route: Router,
              private dataService: DataService) {
  }

  ngOnInit() {
    this.currentUserName = this.dataService.getUserName();
    this.route.navigate(['/examinador/avaliacoes'])
  }

}
