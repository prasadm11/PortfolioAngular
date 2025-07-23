import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCardsComponent } from './side-cards.component';

describe('SideCardsComponent', () => {
  let component: SideCardsComponent;
  let fixture: ComponentFixture<SideCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
