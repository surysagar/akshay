import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { Table } from './Table';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: []
})
export class TableComponent implements OnInit {
  filedata: Table[];
  title = 'Display Status[Read-only]';
  source: LocalDataSource; // add a property to the component

  settings = {
    //selectMode: 'multi',
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
      // xfer_strt_ts: {
      //   title: 'Location'
      // },
      // tm_retry_cnt: {
      //   title: 'Retry/ Count'
      // },
      // xfer_rqst_ts: {
      //   title: 'User'
      // },
      stat_msg_txt: {
        title: 'Status'
      }
    }
  };

  

  constructor(private tservice: TableService) {
    this.tservice.getData().subscribe((data: Table[]) => {
      this.filedata = data;
      this.source = new LocalDataSource(this.filedata); // create the source
      console.log(data);
    });
  }

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
        field: 'stat_msg_txt',
        search: query
      } 
    ], false);

  }
  }
}
