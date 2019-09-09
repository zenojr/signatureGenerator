import { NgModule } from '@angular/core';

import { MatButtonModule,
         MatTabsModule,
         MatToolbarModule,
         MatCardModule,
         MatGridListModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
            MatTabsModule,
            MatToolbarModule,
            MatCardModule,
            MatGridListModule],

  exports: [MatButtonModule,
            MatTabsModule,
            MatToolbarModule,
            MatCardModule,
            MatGridListModule],
})
export class MaterialModule { }
