import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="form-shell">
      <h2>Nou article (template)</h2>
      <p>Omple les dades de l'article perquè es pugui crear amb el formulari reactiu.</p>

      <form [formGroup]="article" (ngSubmit)="onSubmit()" novalidate>
        <div class="field">
          <label for="name">Nom d'article</label>
          <input id="name" type="text" formControlName="name" />
          <p class="error" *ngIf="name.invalid && (name.touched || submitted)">
            <span *ngIf="name.errors?.['required']">El nom és obligatori.</span>
          </p>
        </div>

        <div class="field">
          <label for="price">Preu de l'article</label>
          <input id="price" type="text" formControlName="price" />
          <p class="error" *ngIf="price.invalid && (price.touched || submitted)">
            <span *ngIf="price.errors?.['required']">El preu és obligatori.</span>
            <span *ngIf="price.errors?.['pattern']">El preu ha de ser un número vàlid.</span>
          </p>
        </div>

        <div class="field">
          <label for="imageUrl">URL de la imatge</label>
          <input id="imageUrl" type="text" formControlName="imageUrl" />
          <p class="error" *ngIf="imageUrl.invalid && (imageUrl.touched || submitted)">
            <span *ngIf="imageUrl.errors?.['required']">La URL de la imatge és obligatòria.</span>
            <span *ngIf="imageUrl.errors?.['pattern']">La URL ha de ser vàlida i començar amb http:// o https://.</span>
          </p>
        </div>

        <div class="field checkbox-field">
          <label>
            <input type="checkbox" formControlName="isOnSale" />
            En venda
          </label>
        </div>

        <div class="actions">
          <button type="submit">Crear article</button>
        </div>
      </form>

      <div class="success" *ngIf="saved">
        Article creat amb èxit!
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
      flex-direction: row;
      align-items: center;
      display: flex;
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
export class ArticleNewTemplate {
  submitted = false;
  saved = false;

  article = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.pattern(/^\d+(?:\.\d+)?$/)]),
    imageUrl: new FormControl('', [
      Validators.required,
      Validators.pattern(/^https?:\/\/[A-Za-z0-9]+\.[A-Za-z]{2,3}(\/.*)?$/),
    ]),
    isOnSale: new FormControl(false),
  });

  get name() {
    return this.article.get('name') as FormControl;
  }

  get price() {
    return this.article.get('price') as FormControl;
  }

  get imageUrl() {
    return this.article.get('imageUrl') as FormControl;
  }

  onSubmit(): void {
    this.submitted = true;
    this.saved = false;

    if (this.article.valid) {
      this.saved = true;
      this.article.reset({ isOnSale: false });
      this.submitted = false;
    }
  }
}
