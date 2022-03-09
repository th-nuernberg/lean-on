import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bmc-category',
  templateUrl: './bmc-category.component.html',
  styleUrls: ['./bmc-category.component.css']
})
export class BmcCategoryComponent implements OnInit {

  @Input() hypotheses = []
  @Input() categoryName: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
