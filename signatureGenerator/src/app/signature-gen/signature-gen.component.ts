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



  capture() {

    // html2canvas(document.querySelector('.signature-card'))
    //                     .then(canvas => {
    //                       document.body.appendChild(canvas);
    //            });


  this.htmlSaida = `<HTML><HEAD><link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
  </HEAD>
  <TABLE cellSpacing=0 width=650 border=0 cellPadding=0 style="font-family: 'Verdana', sans-serif; color: rgb(117,120,123); word-spacing: 0; text-transform: none; letter-spacing: normal; text-indent: 0; line-height: 18px;">
  <TBODY>
      <TR>
          <TD vAlign=center rowSpan=5 width=300 align=center><A href="http://www.corfio.com.br/"><IMG border=0 src="https://i.imgur.com/6q5vKF8.png" width=300></A></TD>
          <TD>
              <TABLE cellSpacing=0 cellPadding=30>
                  <TBODY>
                      <TR><TD><FONT style="font-family: 'Verdana', sans-serif; FONT-SIZE: 18px; FONT-WEIGHT: bold;  color: rgb(117,120,123);">` + this.nome + `</FONT><br>
                          <FONT style="font-family: 'Verdana', sans-serif; FONT-SIZE: 14px; FONT-WEIGHT: normal; color: rgb(117,120,123);"> ` + this.cargo + ` </FONT><br><br>
                          <FONT style="font-family: 'Verdana', sans-serif; FONT-SIZE: 18px; FONT-WEIGHT: normal; color: rgb(117,120,123);"> ` + this.phone + ` </FONT><br>
                          <FONT style="font-family: 'Verdana', sans-serif; FONT-SIZE: 14px; FONT-WEIGHT: normal; color: rgb(117,120,123);">` + this.site + `</FONT>
                      </TD></TR>
                  </TBODY>
              </TABLE>
          </TD>
      </TR>
  </TBODY></TABLE>
  </BODY>
  </HTML>
  `;

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
