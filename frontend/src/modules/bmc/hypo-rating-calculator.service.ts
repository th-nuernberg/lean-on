import { Injectable } from '@angular/core';
import {computeRatingValue, Hypothesis} from "./models/hypothesis";

@Injectable()
export class HypoRatingCalculatorService {

  constructor() { }

  computeRatingValue(hypothesis: Hypothesis)
  {
    let result = 0
    for(let rating of hypothesis.ratings)
    {
      result += (rating.value / hypothesis.ratings.length)
    }
    return result
  }

}
