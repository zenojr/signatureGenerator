import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignatureGenComponent } from './signature-gen/signature-gen.component';
import { SignatureHtmloutComponent } from './signature-htmlout/signature-htmlout.component';


const routes: Routes = [
  {path: '', component: SignatureGenComponent},
  {path: 'thunder', component: SignatureHtmloutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
