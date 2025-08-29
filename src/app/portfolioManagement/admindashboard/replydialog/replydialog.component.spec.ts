import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplydialogComponent } from './replydialog.component';

describe('ReplydialogComponent', () => {
  let component: ReplydialogComponent;
  let fixture: ComponentFixture<ReplydialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplydialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplydialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
