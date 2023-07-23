import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RlbFormFieldsComponent } from './rlb-form-fields.component';



describe('FieldsFormComponent', () => {
  let component: RlbFormFieldsComponent;
  let fixture: ComponentFixture<RlbFormFieldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RlbFormFieldsComponent]
    });
    fixture = TestBed.createComponent(RlbFormFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
