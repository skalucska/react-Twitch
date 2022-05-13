import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SizedImagePipe} from './pipes/sized-image.pipe';
import {ViewerCountPipe} from './pipes/viewer-count.pipe';
import {SafePipe} from './pipes/safe.pipe';

@NgModule({
  declarations: [
    SizedImagePipe,
    ViewerCountPipe,
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SizedImagePipe,
    ViewerCountPipe,
    SafePipe
  ]
})
export class SharedModule {
}
