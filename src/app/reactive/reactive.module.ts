import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';
import { FormsModule } from '@angular/forms';
import { NgzorroComponent } from './pages/ngzorro/ngzorro.component';
// import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    BasicPageComponent,
    DynamicPageComponent,
    SwitchesPageComponent,
    NgzorroComponent,
  ],
  imports: [CommonModule, ReactiveRoutingModule, FormsModule],
})
export class ReactiveModule {}
