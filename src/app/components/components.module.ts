import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AvatarComponent } from './avatar/avatar.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AvatarComponent,
    ButtonComponent
  ],
  exports: [
    AvatarComponent,
    ButtonComponent
  ]
})
export class ComponentsModule { }