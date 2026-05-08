import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleList } from './article-list/article-list';
import { Navbar, ViewMode } from './navbar/navbar';
import { ArticleNewTemplate } from './article-new-template/article-new-template';
import { ArticleNewReactive } from './article-new-reactive/article-new-reactive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Navbar, ArticleList, ArticleNewTemplate, ArticleNewReactive],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('ecommerce');
  protected readonly selectedView = signal<ViewMode>('list');

  protected onViewChange(view: ViewMode): void {
    this.selectedView.set(view);
  }
}
