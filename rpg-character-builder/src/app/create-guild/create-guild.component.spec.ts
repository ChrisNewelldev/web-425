/**
 * Author: Chris Newell
 * Date: 2025-12-18
 * File: create-guild.component.spec.ts
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateGuildComponent } from './create-guild.component';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the CreateGuildComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when empty (required fields)', () => {
    expect(component.guildForm.valid).toBeFalse();
  });

  it('should add a guild when form is valid and submitted', () => {
    component.guildForm.setValue({
      guildName: 'Night Owls',
      description: 'Late-night casual group',
      type: 'Casual',
      acceptTerms: true,
      notificationPreference: 'Email',
    });

    component.onSubmit();

    expect(component.guilds.length).toBe(1);
    expect(component.guilds[0].guildName).toBe('Night Owls');
    expect(component.guildForm.valid).toBeFalse();
  });
});
