import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {
  @Input() totalCount: number = 0;
  @Input() pageSize: number = 6;
  @Output() pageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onPagerChange(event: any) {
    this.pageChanged.emit(event.page);
  }
}
