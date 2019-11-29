import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCharacterComponent } from './hero-character.component';

describe('HeroCharacterComponent', () => {
  let component: HeroCharacterComponent;
  let fixture: ComponentFixture<HeroCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
