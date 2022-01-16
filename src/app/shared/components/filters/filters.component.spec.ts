import { CUSTOM_ELEMENTS_SCHEMA, EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FiltersComponent } from './filters.component';
import { filterTypes, categories } from '../../config/filters.config';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let router: Router;
  const filterData: EventEmitter<any> = new EventEmitter();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [],
      providers: [FormsModule, ReactiveFormsModule,
      {
        provide: FormBuilder,
        useValue: formBuilder
      },
      {
        provide: Router,
        useValue: router
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    component.categories = categories;
    component.filterTypes = filterTypes;
    router = TestBed.inject(Router);
    component.filterForm = formBuilder.group({
      key: 'key',
      key1: 'key1'
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should run #ngOnInit()', () => {
    component.ngOnInit();
    expect(component.ngOnInit).toBeDefined();
  });
  it('should run #ngAfterViewChecked()', () => {
    component.ngAfterViewChecked();
    expect(component.ngAfterViewChecked).toBeDefined();
  });
  it('should run #sliderOptions()', () => {
    const data = [
      {
        value: 1,
        unit: 'GB'
      }
    ];
    component.sliderOptions(data);
    expect(component.sliderOptions).toBeDefined();
  });
  it('should run #onCheckBoxSelect()', () => {
    const event = {
      target: {
        checked: true
      }
    };
    const data = {
      key: 'abc'
    };
    component.filterForm = formBuilder?.group({
      abc: formBuilder?.array([])
    });
    component.onCheckBoxSelect(event, data);
    expect(component.onCheckBoxSelect).toBeDefined();
  });
  it('should run #onCheckBoxSelect()', () => {
    const event = {
      target: {
        checked: false,
        value: 1
      }
    };
    const data = {
      key: 'abc'
    };
    component.filterForm = formBuilder?.group({
      abc: formBuilder?.array([1, 2, 3])
    });
    component.onCheckBoxSelect(event, data);
    expect(component.onCheckBoxSelect).toBeDefined();
  });
  it('should run #valueChange()', () => {
    component.filterForm = formBuilder?.group({
      abc: 1
    });
    const event = 5;
    const data = {
      key: 'abc'
    };
    component.valueChange(event, data);
    expect(component.valueChange).toBeDefined();
  });
  it('should run #highValueChange()', () => {
    component.filterForm = formBuilder?.group({
      storageMax: 1
    });
    const event = 5;
    const data = {
      key: 'storageMin',
      key1: 'storageMax'
    };
    component.highValueChange(event, data);
    expect(component.highValueChange).toBeDefined();
  });
  it('should run #onSubmit()', () => {
    component.filterForm = formBuilder?.group({
      abc: 1
    });
    component.filterData = filterData;
    component.onSubmit();
    expect(component.onSubmit).toBeDefined();
  });
});
