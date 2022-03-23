import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {HypothesesDataService} from "../hypothesis-data.service";

@Component({
  selector: 'app-new-hypothesis-dialog',
  templateUrl: './new-hypothesis-dialog.component.html',
  styleUrls: ['./new-hypothesis-dialog.component.css']
})
export class NewHypothesisDialogComponent implements OnInit {

  description = new FormControl(null, [Validators.required])
  categories = [{text: 'KP', fullname: 'Key Partners' , cols: 2, rows: 2, color: 'grey'},
    {text: 'KA',fullname: 'Key Activities' , cols: 2, rows: 1, color: 'grey'},
    {text: 'VP',fullname: 'Value Propositions' , cols: 2, rows: 2, color: 'grey'},
    {text: 'CR',fullname: 'Customer Relationship' , cols: 2, rows: 1, color: 'grey'},
    {text: 'CS',fullname: 'Customer Segments' , cols: 2, rows: 2, color: 'grey'},
    {text: 'KR',fullname: 'Key Resources' , cols: 2, rows: 1, color: 'grey'},
    {text: 'CH',fullname: 'Channel' , cols: 2, rows: 1, color: 'grey'},
    {text: 'CS',fullname: 'Cost Structure' , cols: 5, rows: 1, color: 'grey'},
    {text: 'RS',fullname: 'Revenue Streams' , cols: 5, rows: 1, color: 'grey'},]

  selectedTile: any = null


  constructor(private hypothesisDataService : HypothesesDataService) { }

  ngOnInit(): void {
  }

  notAllFieldsFilled() {
    return this.description.invalid || this.selectedTile === null
  }

  selectTile(event) {

    if(this.selectedTile)
      this.selectedTile.classList.remove("selected")

    this.selectedTile = event.target
    event.target.classList.add("selected")

  }

  sentHypothesis()
  {
    let possibleCategories = ["Key Partners","Key Activities","Channel","Value Propositions",'Customer Segments','Customer Relationship','Key Resources','Cost Structure','Revenue Streams']
    let category = this.selectedTile.getAttribute('data-name')
    if(possibleCategories.includes(category))
    {
      this.hypothesisDataService.sentHypothesis(category, this.description.value)
    }
  }

}
