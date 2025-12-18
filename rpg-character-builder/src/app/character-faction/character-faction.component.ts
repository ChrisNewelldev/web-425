import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface CharacterFaction {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-faction.component.html',
  styleUrls: ['./character-faction.component.css'],
})
export class CharacterFactionComponent implements OnInit {
  factions: CharacterFaction[] = [];
  errorMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<CharacterFaction[]>('http://localhost:3000/api/character-factions').subscribe({
      next: (data) => {
        this.factions = data ?? [];
        this.errorMessage = '';
      },
      error: () => {
        this.factions = [];
        this.errorMessage = 'Unable to load character factions.';
      },
    });
  }
}
