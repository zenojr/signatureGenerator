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
  if ( this.nome !== 'Nome' ) {

    this.htmlSaida = `<!DOCTYPE html>
    <html>
    <head>
        <!-- <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet"> -->
        <style>
            body {
                font-family: Verdana, sans-serif;
            }
            html{
              font-family: 'Verdana', sans-serif;
          }
                              
          
          
          .logoSignature img {
              float: right;
              margin-right: 20px;
              width: 90%;
          }
          
          .itens {
              display: flex;
               justify-content: center;
               align-items: center;
          }
          
          
          
          .signature-card {
                   max-width: 600px;
                padding-left: 40px;
                  margin-top: 15px;
               margin-bottom: 15px;
                      border: 0px solid gray;
            }
            
          .header-image {
              background-image: url('../../assets/img/logoCorfio2019.png');
               background-size: cover;
          }
          
          mat-grid-tile {
              background: white;
          }
          
          .form {
              margin: 10px;
          }
          
          .actions button {
              margin: 10px;
          }
          
          .container-actions {
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
          }
          
          .htmlSaida {
              width: 500px;
              margin-top: 10px;
          }
          
          .signature {    
              color: gray;
              font-family:'Verdana', sans-serif;
              margin-top: 50px;
          }
          
          .signature p {
              margin: 0px;
          }
          
          .contact {
              color: gray;
              font-weight: normal;
              // margin-right: 20px;
              // margin-left: 20px;
              margin-bottom: 50px;
          }
          
          .contact p {
              margin-top: 0px;
              margin-bottom: 0px;
          }
          
          .signature h3, h4 {
              margin: 2px;
          }
          
          #phone {
              font-weight: 700;
          }
          
          mat-form-field {
              margin-left: 10px;
          }
          
          .assinatura {
              border: 1px dashed gray;
              padding: 10px;
              width: 500px;
          }
        </style>
    </head>
    <body>
        <table style="width: 300px">
            <tr>
                <td rowspan=2> 
                        <a href="http://www.corfio.com.br"> 
                            <img style="padding-left: 10px;" width=150 src="https://www.corfio.com.br/image/logo_assinatura_sembarra.png" alt="Corfio">
                        </a>
                 </td>

                <td  style=" width: 1px; height: 125px; background-color: rgb(117,120,123)"></td>
                <td> 
                    <table style="margin-left: 10px; width: 300px; height: 120px">
                        <tr style="height: 15px;"> 
                            <font style="font-family: Verdana, sans-serif; font-SIZE: 14px; font-WEIGHT: bold; color: rgb(86, 95, 95);"> `+this.nome+` </font>                                            
                        </tr>
                        <tr style="height: 15px;">
                            <font  style="font-family: Verdana, sans-serif; font-SIZE: 12px; font-WEIGHT: normal; color: rgb(86, 95, 95);"> `+this.cargo+` </font>
                        </tr>
                        <tr style="height: 15px;">  
                            <font style="font-family: Verdana, sans-serif; font-SIZE: 12px; font-WEIGHT: normal; color: rgb(86, 95, 95);"> `+ this.phone+` </font>
                            <div *ngIf="phone2 != ''">
                                    <font style="font-family: Verdana, sans-serif; font-SIZE: 12px; font-WEIGHT: normal; color: rgb(86, 95, 95);"> `+ this.phone2+` </font>
                            </div>
                            
                            <div *ngIf="phone3 != ''">
                                <font style="font-family: Verdana, sans-serif; font-SIZE: 12px; font-WEIGHT: normal; color: rgb(86, 95, 95);"> `+ this.phone3+`  </font>
                            </div>
                        </tr>
                        
                        <tr>
                            <font style="font-family: Verdana, sans-serif; font-SIZE: 12px; font-WEIGHT: normal; color: rgb(86, 95, 95);"> `+ this.skype+` </font>
                        </tr>
                        <tr style="height: 10px;">
                            <font style="font-family: Verdana, sans-serif; font-SIZE: 10px; font-WEIGHT: normal; color: rgb(86, 95, 95); text-decoration:none"> <a href="http://www.corfio.com.br"> www.corfio.com.br </a></font>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>                    
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
