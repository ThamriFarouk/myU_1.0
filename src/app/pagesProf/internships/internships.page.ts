import { Component, OnInit } from '@angular/core';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.page.html',
  styleUrls: ['./internships.page.scss']
})
export class InternshipsPage implements OnInit {
  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 60
  };
  constructor() {}

  ngOnInit() {}
}
