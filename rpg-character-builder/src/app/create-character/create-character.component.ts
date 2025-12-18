import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Create Character</h2>

    <form
      #characterForm="ngForm"
      (ngSubmit)="addCharacter(); resetForm(); characterForm.reset()"
    >
      <label>
        Name:
        <input type="text" name="name" [(ngModel)]="characterName" required />
      </label>

      <label>
        Gender:
        <select name="gender" [(ngModel)]="characterGender" required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label>
        Class:
        <select name="class" [(ngModel)]="characterClass" required>
          <option value="">Select Class</option>
          <option value="Warrior">Warrior</option>
          <option value="Mage">Mage</option>
          <option value="Rogue">Rogue</option>
        </select>
      </label>

      <button type="submit" [disabled]="characterForm.invalid">
        Create Character
      </button>
    </form>

    <ul>
      <li *ngFor="let c of characters">
        {{ c.name }} ({{ c.gender }} {{ c.class }}) - ID: {{ c.id }}
      </li>
    </ul>
  `,
  styles: [],
})
export class CreateCharacterComponent {
  characterName: string = '';
  characterGender: string = '';
  characterClass: string = '';
  characters: any[] = [];

  generateCharacterId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  addCharacter() {
    const newCharacter = {
      id: this.generateCharacterId(),
      name: this.characterName,
      gender: this.characterGender,
      class: this.characterClass,
    };
    this.characters.push(newCharacter);
  }

  resetForm() {
    this.characterName = '';
    this.characterGender = '';
    this.characterClass = '';
  }
}
