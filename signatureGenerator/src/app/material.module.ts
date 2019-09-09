import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule,
            MatCheckboxModule],

  exports: [MatButtonModule,
            MatCheckboxModule],
})
export class MaterialModule { }
