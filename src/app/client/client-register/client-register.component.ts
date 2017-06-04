import { Component, OnInit } from '@angular/core';
import {Client} from "../../shared/model/client";
import {ClientService} from "../../shared/services/client.service";

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.scss']
})
export class ClientRegisterComponent implements OnInit {

  errorMessage: string;
  model: Client = new Client();
  sexos = [
    {name: 'Masculino', abbrev: 'M'},
    {name: 'Feminino', abbrev: 'F'}
  ];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.clientService.create(this.model).subscribe(
      g => {
        alert('sucesso');
      }, error => {
        this.errorMessage = <any> error;
        alert(this.errorMessage);
      }
    );
  }

}
