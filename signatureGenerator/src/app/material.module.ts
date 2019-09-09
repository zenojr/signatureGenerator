import { NgModule } from '@angular/core';

import { MatButtonModule,
         MatTabsModule,
         MatToolbarModule,
         MatCardModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
            MatTabsModule,
            MatToolbarModule,
            MatCardModule],

  exports: [MatButtonModule,
            MatTabsModule,
            MatToolbarModule,
            MatCardModule],
})
export class MaterialModule { }
