import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalNavigatePage } from './modal-navigate';

@NgModule({
  declarations: [
    ModalNavigatePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalNavigatePage),
  ],
})
export class ModalNavigatePageModule {}
