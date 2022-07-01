import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateorupdatememberComponent } from './createorupdatemember.component';

describe('CreateorupdatememberComponent', () => {
  let component: CreateorupdatememberComponent;
  let fixture: ComponentFixture<CreateorupdatememberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateorupdatememberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateorupdatememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
