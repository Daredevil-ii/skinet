// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
// import { PagerComponent } from './components/pager/pager.component';
// import { CarouselModule } from 'ngx-bootstrap/carousel';

// @NgModule({
//   declarations: [
//     PagingHeaderComponent,
//     PagerComponent
//   ],
//   imports: [
//     CommonModule,
//     NgxPaginationModule,
//     NgModule,
//     CarouselModule.forRoot()
// ],
//   exports: [
//     NgxPaginationModule,
//     PagingHeaderComponent,
//     PagerComponent,
//     CarouselModule,
//     NgModule
//   ]
// })
// export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';

@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent,
    OrderTotalsComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    // CarouselModule.forRoot()
  ],
  exports: [
    NgxPaginationModule,
    PagingHeaderComponent,
    PagerComponent,
    // CarouselModule,
    OrderTotalsComponent
  ]
})
export class SharedModule { }