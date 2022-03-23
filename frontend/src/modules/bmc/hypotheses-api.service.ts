import { Injectable } from '@angular/core';
import {BmcModule} from "./bmc.module";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HypothesesApiService {

  constructor(private httpClient: HttpClient) { }

  sentHypothesis(category: string, description: string)
  {

  }

}
