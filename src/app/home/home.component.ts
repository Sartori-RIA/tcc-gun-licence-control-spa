import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

 // test = [ { name: "jojanilsun", age: 20 }, { name: "creidi", age: 43} ];
  constructor() {

  }

  ngOnInit() {
    // this.http.get("http://localhost:8080/sinarm/api/guns").
    // toPromise().then(r => r.json()).then( r => this.test = r);
  }

}
