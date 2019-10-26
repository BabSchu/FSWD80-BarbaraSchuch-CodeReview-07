import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsListComponent } from './travels-list.component';

describe('TravelsListComponent', () => {
  let component: TravelsListComponent;
  let fixture: ComponentFixture<TravelsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
