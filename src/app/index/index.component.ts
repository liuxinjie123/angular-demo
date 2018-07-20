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
  data: object;

  constructor(private indexService: IndexService) { }

  ngOnInit() {
    this.initData();
  }

  initData(): void {
    const indexId = 'IndexId';
    this.indexService.getIndexDataById(indexId).subscribe((result: Result) => {
      if (result != null) {
        if (result.code === '000000') {
          this.data = result.data;
          if (this.data != null) {
            this.id = this.data.toString();
          } else {
            console.log(result.msg);
          }
        } else {
          console.log(result.msg);
        }
      }
      console.log(result);
      console.log(result.code);
      console.log(result.msg);
      console.log(this.data);
    });
  }
}
