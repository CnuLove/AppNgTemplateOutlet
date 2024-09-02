import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptemplateComponent } from './apptemplate.component';

describe('ApptemplateComponent', () => {
  let component: ApptemplateComponent;
  let fixture: ComponentFixture<ApptemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApptemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApptemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
