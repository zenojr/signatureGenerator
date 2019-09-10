import { NgModule } from '@angular/core';

import { MatButtonModule,
         MatTabsModule,
         MatToolbarModule,
         MatCardModule,
         MatGridListModule,
         MatInputModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule,
            MatTabsModule,
            MatToolbarModule,
            MatCardModule,
            MatGridListModule,
            MatInputModule],

  exports: [MatButtonModule,
            MatTabsModule,
            MatToolbarModule,
            MatCardModule,
            MatGridListModule,
            MatInputModule],
})
export class MaterialModule { }
