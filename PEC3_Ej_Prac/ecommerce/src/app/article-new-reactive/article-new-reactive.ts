import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

function NameArticleValidator(control: AbstractControl) {
  const forbiddenNames = ['Prova', 'Test', 'Mock', 'Fake'];
  const value = control.value;
  if (!value || typeof value !== 'string') {
    return null;
  }
  const normalized = value.trim().toLowerCase();
  const isForbidden = forbiddenNames.some((name) => name.toLowerCase() === normalized);
  return isForbidden ? { forbiddenName: true } : null;
}

@Component({
  selector: 'app-article-new-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="form-shell">
      <h2>Nou article (reactiu)</h2>
      <p>Introdueix les dades de l'article perquè es pugui processar correctament.</p>

      <form [formGroup]="article" (ngSubmit)="onSubmit()" novalidate>
        <div class="field">
          <label for="name">Nom d'article</label>
          <input id="name" type="text" formControlName="name" />
          <p class="error" *ngIf="name.invalid && (name.touched || submitted)">
            <span *ngIf="name.errors?.['required']">El nom és obligatori.</span>
            <span *ngIf="name.errors?.['forbiddenName']">Aquest nom no està permès.</span>
          </p>
        </div>

        <div class="field">
          <label for="price">Preu de l'article</label>
          <input id="price" type="number" step="0.01" min="0.1" formControlName="price" />
          <p class="error" *ngIf="price.invalid && (price.touched || submitted)">
            <span *ngIf="price.errors?.['required']">El preu és obligatori.</span>
            <span *ngIf="price.errors?.['min']">El preu ha de ser com a mínim 0,1 €.</span>
            <span *ngIf="price.errors?.['pattern']">El preu ha de ser un nombre vàlid.</span>
          </p>
        </div>

        <div class="field">
          <label for="imageUrl">URL de la imatge</label>
          <input id="imageUrl" type="text" formControlName="imageUrl" />
          <p class="error" *ngIf="imageUrl.invalid && (imageUrl.touched || submitted)">
            <span *ngIf="imageUrl.errors?.['required']">La URL de la imatge és obligatòria.</span>
            <span *ngIf="imageUrl.errors?.['pattern']">La URL ha de ser vàlida i començar per http:// o https://.</span>
          </p>
        </div>

        <div class="field checkbox-field">
          <label>
            <input type="checkbox" formControlName="isOnSale" /> En venda
          </label>
        </div>

        <div class="actions">
          <button type="submit">Enviar</button>
        </div>
      </form>

      <div class="success" *ngIf="saved">
        Dades rebudes correctament des del formulari.
      </div>
    </section>
  `,
  styles: [`
    .form-shell {
      width: min(100%, 720px);
      background: #ffffff;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 18px 36px rgba(15, 23, 42, 0.08);
      color: #0f172a;
    }

    .form-shell h2 {
      margin-top: 0;
      margin-bottom: 0.5rem;
    }

    .form-shell p {
      margin: 0;
      color: #475569;
    }

    form {
      display: grid;
      gap: 1rem;
      margin-top: 1.5rem;
    }

    .field {
      display: grid;
      gap: 0.35rem;
    }

    label {
      font-weight: 600;
      color: #334155;
    }

    input[type='text'],
    input[type='number'] {
      width: 100%;
      padding: 0.85rem 1rem;
      border: 1px solid #cbd5e1;
      border-radius: 0.75rem;
      font-size: 1rem;
      color: #0f172a;
      background: #f8fafc;
    }

    input[type='text']:focus,
    input[type='number']:focus {
      border-color: #0f766e;
      outline: none;
      box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.12);
    }

    .checkbox-field {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
    }

    button {
      padding: 0.95rem 1.5rem;
      border: none;
      border-radius: 0.85rem;
      background: #0f766e;
      color: #ffffff;
      font-weight: 700;
      cursor: pointer;
    }

    button:hover {
      background: #115e59;
    }

    .error {
      display: block;
      margin: 0.35rem 0 0;
      color: #b91c1c;
      font-size: 0.9rem;
      line-height: 1.4;
    }

    .success {
      margin-top: 1rem;
      padding: 1rem;
      border-radius: 0.85rem;
      background: #ecfdf5;
      color: #166534;
      font-weight: 600;
    }
  `],
})
export class ArticleNewReactive {
  submitted = false;
  saved = false;
  article: FormGroup;

  constructor(private fb: FormBuilder) {
    this.article = this.fb.group({
      name: ['', [Validators.required, NameArticleValidator]],
      price: ['', [Validators.required, Validators.pattern(/^\d+(?:\.\d+)?$/), Validators.min(0.1)]],
      imageUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(/^https?:\/\/[A-Za-z0-9][A-Za-z0-9.-]*\.[A-Za-z]{2,3}(\/.*)?$/),
        ],
      ],
      isOnSale: [false],
    });
  }

  get name() {
    return this.article.get('name')!;
  }

  get price() {
    return this.article.get('price')!;
  }

  get imageUrl() {
    return this.article.get('imageUrl')!;
  }

  onSubmit(): void {
    this.submitted = true;
    this.saved = false;

    if (this.article.valid) {
      console.log('Nou article recollit:', this.article.value);
      this.saved = true;
      this.article.reset({ isOnSale: false });
      this.submitted = false;
    }
  }
}
