import { Component } from '@angular/core';

@Component({
  selector: 'app-article-new-reactive',
  standalone: true,
  template: `
    <section class="placeholder-shell">
      <h2>Nou article (reactiu)</h2>
      <p>Aquí es mostrarà el formulari d'alta amb reactive forms.</p>
      <div class="placeholder-card">
        <p>Camp de formulari de nom, preu, imatge, estat de venda i quantitat.</p>
      </div>
    </section>
  `,
  styles: [`
    .placeholder-shell {
      width: 100%;
      max-width: 960px;
      background: #ffffff;
      padding: 1.5rem;
      border-radius: 1rem;
      box-shadow: 0 16px 24px rgba(15, 23, 42, 0.08);
    }

    .placeholder-shell h2 {
      margin-top: 0;
      color: #0f172a;
    }

    .placeholder-card {
      margin-top: 1rem;
      padding: 1rem;
      background: #f8fafc;
      border-radius: 0.75rem;
      color: #334155;
    }
  `],
})
export class ArticleNewReactive {}
