import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ServerService } from './server.service';

describe('ServerService', () => {
  let service: ServerService;
  let http: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ServerService,
        {
          provide: HttpClient,
          useValue: http
        }
      ]
    });
    service = TestBed.inject(ServerService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should run #getAllServers()', () => {
    service.getAllServers();
    expect(service.getAllServers).toBeDefined();
  });
});
