import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-signature-gen',
  templateUrl: './signature-gen.component.html',
  styleUrls: ['./signature-gen.component.scss']
})
export class SignatureGenComponent implements OnInit {

  nome = '';
  cargo = '';
  phone = '';
  phone1Area = '';
  phone2 = '';
  phone3 = '';
  skype = '';
  site  = 'www.corfio.com.br';
  cardFinal = '';
  htmlSaida = '';

  constructor() { }

  ngOnInit() {
  }

  addPhone() {
    // var para = document.createElement("p");
    // var node = document.createTextNode("This is new.");
    // para.appendChild(node);

    // var element = document.getElementById("div1");
    // element.appendChild(para);

    let button = document.createElement('p');
    let node = document.createTextNode('this update another ??');
    button.appendChild(node);

    let elementTorecieve = document.getElementById('form');
    elementTorecieve.appendChild(button);

  }

  clearForm() {
    this.nome = null;
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

    this.htmlSaida = `<html>
    <head>
    <style type="text/css">
      body {
        font-family: Verdana, sans-serif;
      }
    </style>
  </head>
  <body>
  <table cellSpacing=0 width=650 border=0 cellPadding=0 style="font-family: 'Verdana', sans-serif; color: rgb(117,120,123); word-spacing: 0; text-transform: none; letter-spacing: normal; text-indent: 0; line-height: 18px;">
  <tbody>
      <tr>
          <td vAlign=center rowSpan=5 width=300 height=175 align=center><a href="http://www.corfio.com.br/"><img border=0 src="https://www.corfio.com.br/image/logo_assinatura.png" width=300 height=175 ></a></td>
          <td>
              <table cellSpacing=0 cellPadding=30>
                  <tbody>
                      <tr><td><font style="font-family: 'Verdana', sans-serif; font-SIZE: 18px; font-WEIGHT: bold;  color: rgb(117,120,123);">` + this.nome + `</font><br>
                          <font style="font-family: 'Verdana', sans-serif; font-SIZE: 14px; font-WEIGHT: normal; color: rgb(117,120,123);"> ` + this.cargo + ` </font><br><br>
                          <font style="font-family: 'Verdana', sans-serif; font-SIZE: 18px; font-WEIGHT: normal; color: rgb(117,120,123);"> +55  ` + this.phone + ` </font><br>
                          <font style="font-family: 'Verdana', sans-serif; font-SIZE: 14px; font-WEIGHT: normal; color: rgb(117,120,123); text-decoration:none">` + this.site + `</font>
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