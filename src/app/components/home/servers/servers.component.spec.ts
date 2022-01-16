import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersComponent } from './servers.component';
import { ServerService } from '../../../shared/services/server.service';

describe('ServersComponent', () => {
  let component: ServersComponent;
  let fixture: ComponentFixture<ServersComponent>;
  const servers = [

  ];
  const serverServiceMock = {
    getAllServers: () => ({
      subscribe: (f) => f(servers)
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServersComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule],
      providers: [
        ServerService,
        {
          provide: ServerService,
          useValue: serverServiceMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should run #ngOnInit()', () => {
    component.ngOnInit();
    expect(component.ngOnInit).toBeDefined();
  });
  it('should run #filterData()', () => {
    const data = {
      ram: [1, 2],
      hdd: 'SASS'
    };
    component.filterData(data);
    expect(component.filterData).toBeDefined();
  });

  it('should run #getAllServers()', () => {
    const params = {
      ram: [1, 2],
      hdd: 'SASS'
    };
    component.getAllServers(params);
    expect(component.getAllServers).toBeDefined();
  });
});
