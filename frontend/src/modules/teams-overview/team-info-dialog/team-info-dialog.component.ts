import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-team-info-dialog',
  templateUrl: './team-info-dialog.component.html',
  styleUrls: ['./team-info-dialog.component.css']
})
export class TeamInfoDialogComponent implements OnInit {

  displayedColumns=["#","Firstname","Lastname","E-Mail"]

  tableDataSource;

  constructor(@Inject(MAT_DIALOG_DATA) public  data: any) { }

  ngOnInit(): void {
    this.tableDataSource = this.data.users
  }

}
