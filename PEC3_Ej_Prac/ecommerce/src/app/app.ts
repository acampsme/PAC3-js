import { Component, signal } from '@angular/core';
import { ArticleList } from './article-list/article-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ArticleList],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('ecommerce');
}
