import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { LearnMoreRoutes } from './learn-more.routing';
import { LearnMoreComponent } from './containers/index';

@NgModule({
  imports: [CommonModule, LearnMoreRoutes, FormsModule, TranslateModule],
  exports: [],
  declarations: [LearnMoreComponent]
})
export class LearnMoreModule {}
