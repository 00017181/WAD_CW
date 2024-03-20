import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTodoComponent } from './service-todo.component';

describe('ServiceTodoComponent', () => {
  let component: ServiceTodoComponent;
  let fixture: ComponentFixture<ServiceTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
