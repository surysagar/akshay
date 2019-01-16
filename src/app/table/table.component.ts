import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';
import { Table } from './Table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  employees: Table[];

  settings = {
    //selectMode: 'multi',
    hideSubHeader: true,  
    actions: false,
    columns: {
      file_nam: {
        title: 'File name'
      },
      source_hub_id: {
        title: 'SRC HUB'
      },
      owning_hub_id: {
        title: 'Owning Hub'
      },
      bulk_id: {
        title: 'Bulk Id.'
      },
      endpt_id: {
        title: 'Endpoint'
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

  constructor(private tservice: TableService) {}

  ngOnInit() {
    this.tservice.getData().subscribe((data: Table[]) => {
      this.employees = data;
      console.log(data);
    });
  }
}
