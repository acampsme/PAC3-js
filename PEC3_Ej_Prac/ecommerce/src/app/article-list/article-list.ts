import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article, ArticleQuantityChange } from '../article.model';
import { ArticleItemComponent } from '../article-item.component';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleItemComponent],
  template: `
    <section class="article-list-shell">
      <h2>Catàleg de productes</h2>
      <div class="article-grid">
        <app-article-item
          *ngFor="let article of articles()"
          [article]="article"
          (quantityChange)="onQuantityChange($event)"
        ></app-article-item>
      </div>
    </section>
  `,
  styles: [
    `
      .article-list-shell {
        width: min(100%, 1200px);
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .article-list-shell h2 {
        margin: 0;
        font-size: 2rem;
        color: #0f172a;
      }

      .article-grid {
        display: grid;
        gap: 1.5rem;
      }

      @media (min-width: 900px) {
        .article-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ArticleList {
  articles = signal<Article[]>([
    {
      id: 1,
      name: 'Motxilla taronja d’aventura',
      imageUrl: 'assets/products/product-1.jpg',
      price: 49.99,
      isOnSale: true,
      quantityInCart: 0,
    },
    {
      id: 2,
      name: 'Auriculars sense fils blaus',
      imageUrl: 'assets/products/product-2.jpg',
      price: 79.9,
      isOnSale: true,
      quantityInCart: 0,
    },
    {
      id: 3,
      name: 'Càmera de fotos retro',
      imageUrl: 'assets/products/product-3.jpg',
      price: 129.0,
      isOnSale: false,
      quantityInCart: 0,
    },
  ]);

  onQuantityChange(change: ArticleQuantityChange): void {
    this.articles.update((list) =>
      list.map((item) =>
        item.id === change.article.id ? { ...item, quantityInCart: change.quantity } : item
      )
    );
  }
}
