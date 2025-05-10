import { Component } from '@angular/core';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';

@Component({
  selector: 'app-root',
  imports: [NgxShimmerLoadingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'shimmer-loading';
}
