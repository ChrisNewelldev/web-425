import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CharacterFactionComponent } from './character-faction.component';

describe('CharacterFactionComponent', () => {
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let component: CharacterFactionComponent;
  let httpMock: HttpTestingController;

  const url = 'http://localhost:3000/api/character-factions';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFactionComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should fetch factions on init', () => {
    fixture.detectChanges();

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');

    req.flush([{ id: 1, name: 'Arcane Order', description: 'Mages' }]);

    expect(component.factions.length).toBe(1);
  });

  it('should set errorMessage on failure', () => {
    fixture.detectChanges();

    const req = httpMock.expectOne(url);
    req.error(new ErrorEvent('Network error'));

    expect(component.errorMessage).toBeTruthy();
  });
});
