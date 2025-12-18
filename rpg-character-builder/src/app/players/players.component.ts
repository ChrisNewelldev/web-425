import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Character {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="players">
      <h2>Players</h2>

      <div
        class="character-list"
        id="characterList"
        data-testid="character-list"
      >
        <div
          class="character character-item"
          data-testid="character-item"
          *ngFor="let c of characters"
        >
          <h3>{{ c.name }}</h3>
          <p><strong>Gender:</strong> {{ c.gender }}</p>
          <p><strong>Class:</strong> {{ c.class }}</p>
          <p><strong>Faction:</strong> {{ c.faction }}</p>
          <p><strong>Starting Location:</strong> {{ c.startingLocation }}</p>
          <p><strong>Fun Fact:</strong> {{ c.funFact }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .character-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }

      .character {
        border: 1px solid #ccc;
        padding: 12px;
        border-radius: 8px;
      }
    `,
  ],
})
export class PlayersComponent {
  characters: Character[] = [
    {
      name: 'Thorn',
      gender: 'Male',
      class: 'Warrior',
      faction: 'The Iron Brotherhood',
      startingLocation: 'Ironhold',
      funFact: 'Thorn once single-handedly defeated a dragon.',
    },
    {
      name: 'Lyra',
      gender: 'Female',
      class: 'Mage',
      faction: 'Arcane Circle',
      startingLocation: 'Silver Spire',
      funFact: 'Lyra can read ancient runes fluently.',
    },
    {
      name: 'Kael',
      gender: 'Male',
      class: 'Rogue',
      faction: 'Shadow Syndicate',
      startingLocation: 'Nightfall',
      funFact: 'Kael has never been caught stealing.',
    },
    {
      name: 'Aria',
      gender: 'Female',
      class: 'Mage',
      faction: 'Crystal Order',
      startingLocation: 'Frosthaven',
      funFact: 'Aria controls ice magic naturally.',
    },
    {
      name: 'Borin',
      gender: 'Male',
      class: 'Warrior',
      faction: 'Stoneguard',
      startingLocation: 'Deepforge',
      funFact: 'Borin forged his own armor.',
    },
    {
      name: 'Selene',
      gender: 'Female',
      class: 'Rogue',
      faction: 'Moonveil',
      startingLocation: 'Lunaris',
      funFact: 'Selene never misses her mark.',
    },
    {
      name: 'Drax',
      gender: 'Male',
      class: 'Warrior',
      faction: 'Bloodbound',
      startingLocation: 'Red Plains',
      funFact: 'Drax fears no enemy.',
    },
    {
      name: 'Mira',
      gender: 'Female',
      class: 'Mage',
      faction: 'Sunfall',
      startingLocation: 'Golden Reach',
      funFact: 'Mira can bend light.',
    },
    {
      name: 'Nox',
      gender: 'Other',
      class: 'Rogue',
      faction: 'Voidwalkers',
      startingLocation: 'The Rift',
      funFact: 'Nox moves silently through shadows.',
    },
    {
      name: 'Eron',
      gender: 'Male',
      class: 'Warrior',
      faction: 'Stormcallers',
      startingLocation: 'Skywatch',
      funFact: 'Eron rides thunder into battle.',
    },
  ];
}
