import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { LoginRoutes } from './login.routing';
import { LoginComponent } from './containers/index';

@NgModule({
  imports: [CommonModule, LoginRoutes, FormsModule, TranslateModule],
  exports: [],
  declarations: [LoginComponent]
})
export class LoginModule {}
