import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { SignUpRoutes } from './sign-up.routing';
import { SignUpComponent } from './containers/index';

@NgModule({
  imports: [CommonModule, SignUpRoutes, FormsModule, TranslateModule],
  exports: [],
  declarations: [SignUpComponent]
})
export class SignUpModule {}
