import {Component, Input, OnInit} from '@angular/core';
import {Hypothesis} from "../models/hypothesis";
import {HypoRatingCalculatorService} from "../hypo-rating-calculator.service";

@Component({
  selector: 'app-bmc-category',
  templateUrl: './bmc-category.component.html',
  styleUrls: ['./bmc-category.component.css']
})
export class BmcCategoryComponent implements OnInit {

  @Input() hypotheses: Hypothesis[] = []
  @Input() categoryName: string = ""

  constructor(public ratingCalculator: HypoRatingCalculatorService) { }

  ngOnInit(): void {
  }

}
