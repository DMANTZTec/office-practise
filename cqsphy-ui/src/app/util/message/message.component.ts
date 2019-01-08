import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Params } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }
  msg = '';


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (params['msg']) {
        this.msg = params['msg'];
      }
    });
  }
}