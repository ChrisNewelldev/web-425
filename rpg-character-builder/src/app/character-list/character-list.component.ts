import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Characters</h3>

    <p *ngIf="!characters || characters.length === 0">
      No characters created yet.
    </p>

    <ul *ngIf="characters && characters.length > 0">
      <li *ngFor="let c of characters">
        {{ c.name }} ({{ c.gender }} {{ c.class }})
      </li>
    </ul>
  `,
})
export class CharacterListComponent {
  @Input() characters: any[] = [];
}
