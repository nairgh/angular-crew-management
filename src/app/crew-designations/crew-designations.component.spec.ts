import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewDesignationsComponent } from './crew-designations.component';

describe('CrewDesignationsComponent', () => {
  let component: CrewDesignationsComponent;
  let fixture: ComponentFixture<CrewDesignationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewDesignationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrewDesignationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
