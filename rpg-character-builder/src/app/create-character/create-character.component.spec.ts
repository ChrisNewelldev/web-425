import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random character ID between 1 and 1000 with no decimals', () => {
    const id = component.generateCharacterId();
    expect(id).toBeGreaterThanOrEqual(1);
    expect(id).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(id)).toBeTrue();
  });

  it('should add a character with correct customization', () => {
    component.characterName = 'Aragorn';
    component.characterGender = 'Male';
    component.characterClass = 'Warrior';

    component.addCharacter();

    expect(component.characters.length).toBe(1);
    expect(component.characters[0]).toEqual(
      jasmine.objectContaining({
        name: 'Aragorn',
        gender: 'Male',
        class: 'Warrior',
      })
    );
  });

  it('should reset all form fields after resetForm is called', () => {
    component.characterName = 'Test';
    component.characterGender = 'Female';
    component.characterClass = 'Mage';

    component.resetForm();

    expect(component.characterName).toBe('');
    expect(component.characterGender).toBe('');
    expect(component.characterClass).toBe('');
  });
});
