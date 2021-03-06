import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {TeamDataService} from "../team-data.service";



@Component({
  selector: 'app-team-dialog',
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.css']
})
export class TeamDialogComponent implements OnInit {

  formGroup: FormGroup = this.setUpFormGroup()
  displayedColumns = ['Firstname', 'Lastname','E-Mail']
  usersDataSource = new MatTableDataSource<{ firstname: string, lastname: string, email: string }>([])
  // @ts-ignore
  @ViewChild(MatTable) table: MatTable<any>;
  // @ts-ignore
  @ViewChild('firstname') input: ElementRef


  constructor(public teamDataService : TeamDataService) { }

  ngOnInit(): void {
  }

  private setUpFormGroup() {
    return new FormGroup({
      'team-name': new FormControl(null, [Validators.required]),
      'users': new FormGroup({
        'firstname': new FormControl(null),
        'lastname': new FormControl(null),
        'email': new FormControl(null)})
    })
  }



  onAddUser() {
    let firstname = this.formGroup.get('users.firstname')?.value
    let lastname = this.formGroup.get('users.lastname')?.value
    let email = this.formGroup.get('users.email')?.value


    this.usersDataSource.data.push({'firstname': firstname, 'lastname': lastname, 'email': email})

    if(this.usersDataSource.data.length > 1)
    {
      this.table.renderRows()
    }

    this.formGroup.get('users')?.reset()
    this.input.nativeElement.focus()

  }

  sentTeamData()
  {
    // @ts-ignore
    this.teamDataService.postTeam(this.formGroup.get('team-name')?.value, this.usersDataSource.data)
  }

  teamNameEmpty()
  {
    return this.formGroup.get('team-name')?.invalid
  }
}
