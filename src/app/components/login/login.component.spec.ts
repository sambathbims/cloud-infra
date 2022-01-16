import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [],
      providers: [
        FormsModule,
        ReactiveFormsModule,
        {
          provide: FormBuilder,
          useValue: formBuilder
        },
        {
          provide: Router,
          useValue: router
        }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.loginForm = formBuilder?.group({
      email: ['admin', Validators.required],
      password: ['admin', Validators.required]
    });
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should run #ngOnInit()', () => {
    component.ngOnInit();
    expect(component.ngOnInit).toBeDefined();
  });
  it('should run #login()', () => {
    component.login();
    component.loginForm?.controls.email.setValue('admin');
    component.loginForm?.controls.password.setValue('admin');
    expect(component.login).toBeDefined();
  });
  it('should run #createLoginForm()', () => {
    component.createLoginForm();
    component.loginForm = formBuilder?.group({
      email: ['admin', Validators.required],
      password: ['admin', Validators.required]
    });
    expect(component.createLoginForm).toBeDefined();
  });
});
