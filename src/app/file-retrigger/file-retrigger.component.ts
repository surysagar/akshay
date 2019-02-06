import { Component, OnInit } from '@angular/core';
import { TableService } from '../table/table.service';
import { Table } from '../table/Table';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-file-retrigger',
  templateUrl: './file-retrigger.component.html',
  styleUrls: ['./file-retrigger.component.css']
})
export class FileRetriggerComponent implements OnInit {
  filedata: Table[];
  title = 'File Retrigger';
  source: LocalDataSource; // add a property to the component

  constructor(private tservice: TableService) {
    this.tservice.getData().subscribe((data: Table[]) => {
      this.filedata = data;
      this.source = new LocalDataSource(this.filedata); // create the source
      console.log(data);
    });
  }

  settings = {
    selectMode: 'multi',
    hideSubHeader: true,  
    actions: false,
    columns: {
      file_nam: {
        title: 'File name',
        filter: false
      },
      source_hub_id: {
        title: 'SRC HUB',
        filter: false
      },
      owning_hub_id: {
        title: 'Owning Hub',
        filter: false
      },
      bulk_id: {
        title: 'Bulk Id.',
        filter: false
      },
      endpt_id: {
        title: 'Endpoint',
        filter: false
      },
      tm_retry_cnt: {
        title: 'Retry Count',
        filter: false
      },
      stat_msg_txt: {
        title: 'Status'
      }
    }
  };
  ngOnInit() {
    // this.tservice.getData().subscribe((data: Table[]) => {
    //   this.filedata = data;
    //   console.log(data);
    // });
  }

  onSearch(query: string = '') {
    if (query === '') {

      this.source.setFilter([]);

    } else {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'file_nam',
        search: query
      },
      {
        field: 'source_hub_id',
        search: query
      },
      {
        field: 'owning_hub_id',
        search: query
      },
      {
        field: 'bulk_id',
        search: query
      },
      {
        field: 'endpt_id', 
        search: query
      },
      {
        field: 'tm_retry_cn', 
        search: query
      },
      {
        field: 'stat_msg_txt',
        search: query
      } 
    ], false);

  }
  }
}
