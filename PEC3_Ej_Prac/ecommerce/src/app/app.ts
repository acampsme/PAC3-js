import { Component, signal } from '@angular/core';
import { ArticleItemComponent } from './article-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ArticleItemComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('ecommerce');
}
