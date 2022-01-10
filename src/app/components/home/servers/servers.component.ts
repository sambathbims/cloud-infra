import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../../shared/services/server.service';
import { Server, ServerResponse } from '../../../shared/models/server.model';
import { categories } from '../../../shared/config/filters.config';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  servers: Array<Server>;

  filterCategories = categories;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.getAllServers();
  }

  filterData(data) {
    Object.keys(data).map((key) => {
      if (data[key] instanceof Array) {
        if (data[key].length) {
          data[key] = data[key].toString();
        } else {
          delete data[key];
        }
      } else {
        if (data[key] === null || data[key] === undefined || data[key] === '') {
          delete data[key];
        } 
      }
    })
    this.getAllServers(data);
  }

  getAllServers(params?) {
    this.serverService.getAllServers(params).subscribe((res: ServerResponse) => {
      if (res) {
        this.servers = res.servers;
      }
    })
  }
}
