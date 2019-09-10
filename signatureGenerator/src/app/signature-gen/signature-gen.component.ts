import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signature-gen',
  templateUrl: './signature-gen.component.html',
  styleUrls: ['./signature-gen.component.scss']
})
export class SignatureGenComponent implements OnInit {

  nome  = 'Informe nome';
  cargo = 'Cargo';
  phone: number;
  site  = 'www.corfio.com.br';

  constructor() { }

  ngOnInit() {
  }

}
