import {Rating} from "./rating";

export interface Hypothesis{
  _id: string,
  category: string,
  description: string,
  ratings: Rating[]
}

export function computeRatingValue()
{

}

