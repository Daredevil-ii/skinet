import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgModule,
    CarouselModule.forRoot()
],
  exports: [
    NgxPaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    CarouselModule,
    NgModule
  ]
})
export class SharedModule { }