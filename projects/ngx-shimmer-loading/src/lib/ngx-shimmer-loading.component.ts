import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-shimmer-loading',
  templateUrl: './ngx-shimmer-loading.component.html',
  styleUrls: ['./ngx-shimmer-loading.component.scss']
})
export class NgxShimmerLoadingComponent implements OnInit {

  @Input() width = '80%';
  @Input() height = '12px';
  @Input() shape: 'circle' | 'square' | 'rect' = 'rect';
  @Input() borderRadius = '5px';
  @Input() direction: 'ltr' | 'rtl' = 'ltr';
  constructor() {}
  ngOnInit() {}
  get shimmerHeight(): string {
    switch (this.shape) {
      case 'circle':
        return this.width;
      case 'square':
        return this.width;
      case 'rect':
        return this.height;
      default:
        return this.height;
    }
  }

  get shimmerBorderRadius(): string {
    return this.shape === 'circle' ? '50%' : this.borderRadius;
  }
}
