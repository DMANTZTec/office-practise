import { Component, OnInit, Input } from '@angular/core';
import { PhysicianCompareData, PhysicianCompareHeaders } from '../../data/model';
import { PhysicianCompareService, PhysicianCompareSvcParams } from './physician-compare.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-physician-compare',
  templateUrl: './physician-compare.component.html',
  styleUrls: ['./physician-compare.component.css']
})


export class PhysicianCompareComponent implements OnInit {

  data: any;
  phyCompareData: PhysicianCompareData[];
  phyNamesData: PhysicianCompareHeaders;
  phyCategoryData: PhysicianCompareData[] = [];

  modality: string;
  showView: string;

  constructor(private _physicianCompareServiceSvc: PhysicianCompareService) { }

  ngOnInit() {
    this.modality = 'IHD';
    this.showView = 'category'; //singleList category
    // console.log("this.data.checkedPhysList = " + this.data.checkedPhysList);
    this.getDatafromSrv();
  }

  getDatafromSrv() {

    const inputParams = new PhysicianCompareSvcParams();
    inputParams.modality = this.modality;
    inputParams.checkedPhysList = this.data.checkedPhysList;

    this._physicianCompareServiceSvc.getPhyCompareData(inputParams).subscribe(
      data => {
        if (data && data.length > 0) {
          this.phyCompareData = <PhysicianCompareData[]>data;
          this.setCategoryByOrder();
        }
      },
      error => console.error(error)
    );

    this._physicianCompareServiceSvc.getPhyNames(inputParams).subscribe(
      data => {
        if (data) {
          this.phyNamesData = <PhysicianCompareHeaders>data;
        }
      },
      error => console.error(error)
    );
  }

  setCategoryByOrder() {
    this.phyCompareData.forEach(f => {
      if (this.phyCategoryData.filter(g => g.metricCategory === f.metricCategory).length === 0) {
        this.phyCategoryData.push(f);
      }
    });
    this.phyCategoryData = this.phyCategoryData.sort((a, b) => a.metricCategoryOrder - b.metricCategoryOrder);
  }

  getCategoryKPIs(metricCategory: string) {
    return this.phyCompareData.filter(f => f.metricCategory === metricCategory);
  }


  toggleRed() {
    $('p[data-color="red"]').each(function () {
      $(this).toggleClass('bg-red').toggleClass('red');
    });
  }

  toggleYellow() {
    $('p[data-color="yellow"]').each(function () {
      $(this).toggleClass('bg-yellow').toggleClass('yellow');
    });
  }

  toggleGreen() {
    $('p[data-color="green"]').each(function () {
      $(this).toggleClass('bg-green').toggleClass('green');
    });
  }

}
