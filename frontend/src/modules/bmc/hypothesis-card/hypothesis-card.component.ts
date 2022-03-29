import {Component, Input, OnInit} from '@angular/core';
import {HypoRatingCalculatorService} from "../hypo-rating-calculator.service";

@Component({
  selector: 'app-hypothesis-card',
  templateUrl: './hypothesis-card.component.html',
  styleUrls: ['./hypothesis-card.component.css']
})
export class HypothesisCardComponent implements OnInit {

  constructor() { }

  @Input() description: string
  @Input() validationStatus: string
  @Input() rating: number



  ngOnInit(): void {
    this.setHypothesisStatus()

  }

  setHypothesisStatus()
  {
    switch (this.validationStatus){
      case "validated":
        return "status-validated"
      case "experimental":
        return "status-experimental"
      case "rejected":
        return "status-rejected"
      default:
        return ""
    }

  }

}
