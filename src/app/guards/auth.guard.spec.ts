import { TestBed, async, inject } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let route: Router;
  let state: RouterStateSnapshot;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {
          provide: Router,
          useValue: route
        },
        {
          provide: RouterStateSnapshot,
          useValue: state
        }
      ]
    });
    guard = TestBed.inject(AuthGuard);
    route = TestBed.inject(Router);
    state = TestBed.inject(RouterStateSnapshot);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should run #canActivate()', () => {
    const router: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
    const currentUser = {
      email: 'admin',
      password: 'admin'
    };
    guard.canActivate(router, state);
    expect(guard.canActivate).toBeDefined();
  });
});
