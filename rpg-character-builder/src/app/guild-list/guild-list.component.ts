import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guild-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guild-list.component.html',
  styleUrl: './guild-list.component.css',
})
export class GuildListComponent implements OnChanges {
  @Input() guilds: any[] = [];
  @Output() emptyChanged = new EventEmitter<boolean>();

  ngOnChanges(): void {
    this.emptyChanged.emit(this.guilds.length === 0);
  }
}
