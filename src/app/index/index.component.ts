import { Component, OnInit } from '@angular/core';
import { IndexService } from "./shared/index.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  id: String;

  constructor(private indexService: IndexService) { }

  ngOnInit() {
    console.log(' ------------------------------------ ');
    const indexId = 'IndexId';
    this.indexService.getIndexDataById(indexId).subscribe((id: String) => {
      this.id = id;
      console.log(id);
    });
  }

}
