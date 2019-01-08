import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'group-page-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  routeLinks: any[];

  constructor() {
    this.routeLinks = [
      { label: 'Group Summary', link: 'group-summary', index: 0 },
      { label: 'Patient Details', link: 'patient-details', index: 1 },
      { label: 'Heatmap', link: 'heatmap', index: 2 }
    ];
   }

  ngOnInit() {
  }

}
