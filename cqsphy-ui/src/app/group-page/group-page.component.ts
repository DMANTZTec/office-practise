import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../bread-crumb/bread-crumb.service';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.css']
})
export class GroupPageComponent implements OnInit {

  public _dataAsOf: string;

  constructor(public breadCrumbService: BreadcrumbService) { }

  ngOnInit() {
    this._dataAsOf = this.breadCrumbService.get('dataAsOfDate');
  }

}
