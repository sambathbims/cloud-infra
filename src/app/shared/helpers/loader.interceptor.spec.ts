import { HttpClient, HttpHandler, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LoaderService } from '../services/loader.service';
import { LoaderInterceptor } from './loader.interceptor';

describe('LoaderInterceptor', () => {
  let interceptor: LoaderInterceptor;
  let loaderService: LoaderService;
  let http: HttpClient;
  let request: HttpRequest<any>;
  let next: HttpHandler;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LoaderService,
          useValue: loaderService
        },
        {
          provide: HttpClient,
          useValue: http
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoaderInterceptor,
          multi: true
        },
        {
          provide: HttpRequest,
          useValue: request
        },
        {
          provide: HttpHandler,
          useValue: next
        }
      ]
    });
    interceptor = TestBed.inject(LoaderInterceptor);
    http = TestBed.inject(HttpClient);
    loaderService = TestBed.inject(LoaderService);
    request = TestBed.inject(HttpRequest);
    next = TestBed.inject(HttpHandler);
  });
  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
  it('should run #intercept()', () => {
    interceptor.intercept(request, next);
    expect(interceptor.intercept).toBeDefined();
  });
});
