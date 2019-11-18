import { Component, OnInit } from '@angular/core';
import { browser } from 'protractor';

@Component({
  selector: 'app-signature-htmlout',
  templateUrl: './signature-htmlout.component.html',
  styleUrls: ['./signature-htmlout.component.scss']
})
export class SignatureHtmloutComponent implements OnInit {

  
  nome = '';
  cargo = '';
  phone = '';
  phone1Area = '';
  phone2 = '';
  skype = '';
  site  = 'www.corfio.com.br';
  cardFinal = '';
  htmlSaida = '';

  constructor() { }

  ngOnInit() {
  }

  saveAs(html) {
    let dataToSave = html;
    this.writeContent(dataToSave, 'Assinatura' + '.htm', 'text/plain');
  }

  writeContent(content, fileName, contentType) {
    let a = document.createElement('a');
    let file = new Blob([content], {type: contentType});
    
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
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

    this.htmlSaida = ` <!DOCTYPE html>
    <html>
    <head>
        <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
        <style>
            body {
                font-family: Verdana, sans-serif;
            }
        </style>
    </head>
    <body>
    <table width=650 heigth=175 cellSpacing=0 cellPadding=1>
        <tr>
            <td width=300 heigth=175>
                <a href="http://www.corfio.com.br"> <img width=300 src="https://www.corfio.com.br/image/logo_assinatura_sembarra.png" alt="">  </a>
            </td>
            <td width=2 heigth=4 style="background-color: rgb(117,120,123)">

            </td>
            <td width=300 height=175 style="padding-left: 25px">

            <div style="height: 150px; font-family: Verdana, Geneva, Tahoma, sans-serif">
                <div style="padding-top: 25px">
                        <font style="font-family: 'Verdana', sans-serif; font-SIZE: 18px; font-WEIGHT: bold; color: rgb(117,120,123);"> `+ this.nome +` </font>
                    <div>
                        <font  style="font-family: 'Verdana', sans-serif; font-SIZE: 14px; font-WEIGHT: normal; color: rgb(117,120,123);"> `+ this.cargo +` </font>
                    </div>
                </div>

                <div style="margin-top: 10px;">
                    <div>
                        <font style="font-family: 'Verdana', sans-serif; font-SIZE: 18px; font-WEIGHT: normal; color: rgb(117,120,123);"> +55 `+ this.phone +` </font><br>
                    </div>

                    <div>
                        <font style="font-family: 'Verdana', sans-serif; font-SIZE: 14px; font-WEIGHT: normal; color: rgb(117,120,123); text-decoration:none"> `+ this.site +` </font>
                    </div>
                </div>

            </div>
            </td>
        </tr>
    </table>

    </body>
    </html>`;

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
