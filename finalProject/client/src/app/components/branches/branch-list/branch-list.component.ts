import { Component, OnInit } from '@angular/core';
import { BRANCH_INTERFACE } from 'src/app/interfaces/branch.interface';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {

  branches: BRANCH_INTERFACE[] = [
    {
      _id: '1',
      name: 'Cash',
      balance: 0
    },
    {
      _id: '2',
      name: 'Visa',
      balance: 1000
    },
    {
      _id: '3',
      name: 'Saving',
      balance: 0
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
