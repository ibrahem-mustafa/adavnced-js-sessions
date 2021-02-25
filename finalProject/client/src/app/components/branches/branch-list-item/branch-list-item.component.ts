import { Component, Input, OnInit } from '@angular/core';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { BRANCH_INTERFACE } from 'src/app/interfaces/branch.interface';

@Component({
  selector: 'app-branch-list-item',
  templateUrl: './branch-list-item.component.html',
  styleUrls: ['./branch-list-item.component.css']
})
export class BranchListItemComponent implements OnInit {
  @Input() branch!: BRANCH_INTERFACE;

  dollarIcon = faDollarSign

  constructor() { }

  ngOnInit(): void {
  }

}
