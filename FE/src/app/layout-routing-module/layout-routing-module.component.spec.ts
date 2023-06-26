import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutRoutingModuleComponent } from './layout-routing-module.component';

describe('LayoutRoutingModuleComponent', () => {
  let component: LayoutRoutingModuleComponent;
  let fixture: ComponentFixture<LayoutRoutingModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutRoutingModuleComponent]
    });
    fixture = TestBed.createComponent(LayoutRoutingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
