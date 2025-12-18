/**
 * @author Chris Newell
 * @date 2025-12-18
 */

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}

@Component({
  selector: 'app-create-character',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css'],
})
export class CreateCharacterComponent {
  characterName = '';
  characterGender = '';
  characterClass = '';

  characters: Character[] = [];

  generateCharacterId(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  addCharacter(): void {
    if (!this.characterName || !this.characterGender || !this.characterClass) {
      return;
    }

    const character: Character = {
      id: this.generateCharacterId(),
      name: this.characterName,
      gender: this.characterGender,
      class: this.characterClass,
    };

    this.characters.push(character);
    this.resetForm();
  }

  resetForm(): void {
    this.characterName = '';
    this.characterGender = '';
    this.characterClass = '';
  }
}
