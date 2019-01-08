import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/rx';
import { ActivatedRoute, NavigationEnd, Router } from '../../../../node_modules/@angular/router';
import { BreadcrumbService } from '../../bread-crumb/bread-crumb.service';

@Component({
  selector: 'physician-summary-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  routeLinks: any[];
  private _navigationSubscription: Subscription;

  constructor(public _breadCrumbService: BreadcrumbService, private _router: Router, private activatedRoute: ActivatedRoute) {

    this._navigationSubscription = this._router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.setRouterLinks();
      }
    });
   
   }

  ngOnInit() {
  }

  setRouterLinks(){
    this.routeLinks = [
      { label: 'My Summary', link: 'patient-summary-view', index: 0 },
      { label: 'My Patient Details', link: 'patient-details-view', index: 1 },
      { label: 'My Heatmap View', link: 'kpi-heatmap-view', index: 2 },
      { label: 'Group Summary', link: 'group-summary-view', index: 3 }
    ];
  }


  ngOnDestroy() {
    if (this._navigationSubscription) {
      this._navigationSubscription.unsubscribe();
    }
  }

}
