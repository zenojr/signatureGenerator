import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-signature-gen',
  templateUrl: './signature-gen.component.html',
  styleUrls: ['./signature-gen.component.scss']
})
export class SignatureGenComponent implements OnInit {

  nome: string;
  cargo: string;
  phone: number;
  site  = 'www.corfio.com.br';

  constructor() { }

  ngOnInit() {
  }

  capture() {
    html2canvas(document.querySelector('#capture')).then(canvas => {
      document.body.appendChild(canvas);
  });
  }

}
