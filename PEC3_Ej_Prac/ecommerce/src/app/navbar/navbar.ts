import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ViewMode = 'list' | 'template' | 'reactive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar">
      <ul>
        <li>
          <button type="button" [class.active]="selectedView === 'list'" (click)="changeView('list')">Inici</button>
        </li>
        <li>
          <button type="button" [class.active]="selectedView === 'list'" (click)="changeView('list')">Articles</button>
        </li>
        <li>
          <button type="button" [class.active]="selectedView === 'template'" (click)="changeView('template')">Nou article template</button>
        </li>
        <li>
          <button type="button" [class.active]="selectedView === 'reactive'" (click)="changeView('reactive')">Nou article reactiu</button>
        </li>
      </ul>
    </nav>
  `,
  styles: [`
    .navbar {
      width: 100%;
      background: #ffffff;
      border-bottom: 1px solid #e2e8f0;
      padding: 0.75rem 1rem;
      box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);
    }

    .navbar ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .navbar button {
      border: none;
      background: transparent;
      color: #334155;
      font-size: 0.95rem;
      padding: 0.65rem 0.9rem;
      border-radius: 0.75rem;
      cursor: pointer;
    }

    .navbar button.active,
    .navbar button:hover {
      background: #0f172a;
      color: #ffffff;
    }
  `],
})
export class Navbar {
  @Input() selectedView: ViewMode = 'list';
  @Output() viewChange = new EventEmitter<ViewMode>();

  changeView(view: ViewMode): void {
    this.viewChange.emit(view);
  }
}
