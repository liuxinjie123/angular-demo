import { Component, OnInit } from '@angular/core';
import { IndexService } from './shared/index.service';
import { Result } from '../result';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  id: string;
  code: string;
  msg: string;
  data: object;

  constructor(private indexService: IndexService) { }

  ngOnInit() {
    this.initData();
  }

  initData(): void {
    const indexId = 'IndexId';
    this.indexService.getIndexDataById(indexId).subscribe((result: Result) => {
      if (result != null) {
        this.code = result.code;
        this.msg = result.msg;
        if (this.code === '000000') {
          this.data = result.data;
          if (this.data != null) {
            this.id = this.data.toString();
          } else {
            console.log(this.msg);
          }
        } else {
          console.log(this.msg);
        }
      }
      console.log(result);
      console.log(this.code);
      console.log(this.msg);
      console.log(this.data);
    });
  }
}
