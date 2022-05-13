import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './containers/header/header.component';
import {SidenavComponent} from './containers/sidenav/sidenav.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, SidenavComponent],
  exports: [
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule {
}
