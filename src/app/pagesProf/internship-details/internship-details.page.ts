import { Component, OnInit } from '@angular/core';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';

@Component({
  selector: 'app-internship-details',
  templateUrl: './internship-details.page.html',
  styleUrls: ['./internship-details.page.scss']
})
export class InternshipDetailsPage implements OnInit {
  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 60
  };
  constructor() {}

  ngOnInit() {}
}
