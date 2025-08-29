import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactdialogComponent } from './contactdialog.component';

describe('ContactdialogComponent', () => {
  let component: ContactdialogComponent;
  let fixture: ComponentFixture<ContactdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactdialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
