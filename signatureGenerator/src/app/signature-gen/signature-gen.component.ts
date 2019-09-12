import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-signature-gen',
  templateUrl: './signature-gen.component.html',
  styleUrls: ['./signature-gen.component.scss']
})
export class SignatureGenComponent implements OnInit {

  nome = 'Nome';
  cargo = 'Departamento';
  phone = '49 9999999';
  site  = 'www.corfio.com.br';
  cardFinal = '';
  htmlSaida = '';

  constructor() { }

  ngOnInit() {
  }

  copy(data: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = data;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  capture() {

    // html2canvas(document.querySelector('.signature-card'))
    //                     .then(canvas => {
    //                       document.body.appendChild(canvas);
    //            });

  if ( this.nome !== 'Nome' ) {

    this.htmlSaida = `<html><head>
    <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
    <style>
      body {
        font-family: Muli, Verdana, sans-serif;
      }
    </style>
  </head>
  <body>
  <table cellSpacing=0 width=650 border=0 cellPadding=0 style="font-family: 'Verdana', sans-serif; color: rgb(117,120,123); word-spacing: 0; text-transform: none; letter-spacing: normal; text-indent: 0; line-height: 18px;">
  <tbody>
      <tr>
          <td vAlign=center rowSpan=5 width=300 height=175 align=center><A href="http://www.corfio.com.br/"><IMG border=0 src="https://i.imgur.com/6q5vKF8.png" width=300 height=175 ></A></td>
          <td>
              <table cellSpacing=0 cellPadding=30>
                  <tbody>
                      <tr><td><font style="font-family: 'Muli', 'Verdana', sans-serif; font-SIZE: 18px; font-WEIGHT: bold;  color: rgb(117,120,123);">` + this.nome + `</font><br>
                          <font style="font-family: 'Muli', 'Verdana', sans-serif; font-SIZE: 14px; font-WEIGHT: normal; color: rgb(117,120,123);"> ` + this.cargo + ` </font><br><br>
                          <font style="font-family: 'Muli', 'Verdana', sans-serif; font-SIZE: 18px; font-WEIGHT: normal; color: rgb(117,120,123);"> +55  ` + this.phone + ` </font><br>
                          <font style="font-family: 'Muli', 'Verdana', sans-serif; font-SIZE: 14px; font-WEIGHT: normal; color: rgb(117,120,123); text-decoration:none">` + this.site + `</font>
                      </td></tr>
                  </tbody>
              </table>
          </td>
      </tr>
  </tbody></table>
  </body>
  </html>
  `;

  } else {
    alert('Favor preencher os campos da assinatura');
  }

  }

  downloadSignature() {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    this.cardFinal = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const link = document.createElement('a');
    link.download = 'assinatura' + this.nome + '.png';
    link.href = this.cardFinal;
    link.click();
  }

}
