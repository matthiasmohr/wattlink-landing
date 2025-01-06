import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProzessComponent } from './prozess.component';

describe('ProzessComponent', () => {
  let component: ProzessComponent;
  let fixture: ComponentFixture<ProzessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProzessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProzessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
