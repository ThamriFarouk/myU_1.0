import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollHideConfig } from 'src/app/directives/scroll-hide.directive';

@Component({
  selector: 'app-internship-details',
  templateUrl: './internship-details.page.html',
  styleUrls: ['./internship-details.page.scss']
})
export class InternshipDetailsPage implements OnInit {
  public internship_id;

  headerScrollConfig: ScrollHideConfig = {
    cssProperty: 'margin-top',
    maxValue: 60
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // tslint:disable-next-line:radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.internship_id = id;
  }
}
