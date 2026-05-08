import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from './article.model';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="article-card" [class.on-sale]="article().isOnSale">
      <img class="article-image" [src]="article().imageUrl" [alt]="article().name" />

      <div class="article-details">
        <h2>{{ article().name }}</h2>
        <p class="price">Preu: {{ article().price | currency:'EUR':'symbol':'1.2-2' }}</p>
        <p class="sale-status">{{ article().isOnSale ? 'Producte en venda' : 'No està en venda' }}</p>
        <p>Quantitat al carret: <strong>{{ article().quantityInCart }}</strong></p>

        <div class="buttons">
          <button type="button" (click)="decrement()" [disabled]="article().quantityInCart === 0">-</button>
          <button type="button" (click)="increment()">+</button>
        </div>
      </div>
    </article>
  `,
  styles: [
    `
      .article-card {
        display: grid;
        grid-template-columns: 220px 1fr;
        gap: 1rem;
        padding: 1.25rem;
        border-radius: 1rem;
        border: 2px solid #dfe3e8;
        background: #ffffff;
        box-shadow: 0 16px 32px rgba(15, 23, 42, 0.08);
        max-width: 780px;
        align-items: center;
      }

      .article-card.on-sale {
        background: #f1fbf3;
        border-color: #60a55f;
      }

      .article-image {
        width: 100%;
        height: 100%;
        max-height: 260px;
        object-fit: cover;
        border-radius: 0.85rem;
      }

      .article-details {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .article-details h2 {
        margin: 0;
        font-size: 1.8rem;
        color: #0f172a;
      }

      .price {
        margin: 0;
        font-size: 1.05rem;
        font-weight: 600;
        color: #334155;
      }

      .sale-status {
        margin: 0;
        color: #166534;
        font-weight: 600;
      }

      .buttons {
        display: flex;
        gap: 0.7rem;
      }

      button {
        border: 2px solid #0f766e;
        background: #ffffff;
        color: #0f766e;
        font-size: 1rem;
        font-weight: 700;
        width: 3rem;
        height: 3rem;
        border-radius: 0.85rem;
        cursor: pointer;
        transition: background 0.18s ease, color 0.18s ease;
      }

      button:hover:not(:disabled) {
        background: #0f766e;
        color: #ffffff;
      }

      button:disabled {
        opacity: 0.45;
        cursor: not-allowed;
        border-color: #94a3b8;
        color: #94a3b8;
      }

      @media (max-width: 720px) {
        .article-card {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class ArticleItemComponent {
  article = signal<Article>({
    name: 'Motxilla taronja d’aventura',
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    price: 49.99,
    isOnSale: true,
    quantityInCart: 0,
  });

  increment(): void {
    this.article.update((current) => ({
      ...current,
      quantityInCart: current.quantityInCart + 1,
    }));
  }

  decrement(): void {
    this.article.update((current) => ({
      ...current,
      quantityInCart: Math.max(0, current.quantityInCart - 1),
    }));
  }
}
