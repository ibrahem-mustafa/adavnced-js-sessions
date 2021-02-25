import { Component, OnInit } from '@angular/core';
import { BRANCH_INTERFACE } from 'src/app/interfaces/branch.interface';
import { BranchesService } from 'src/app/services/branches.service';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {

  branches: BRANCH_INTERFACE[] = [

  ]
  constructor(private branchesService: BranchesService) { }

  ngOnInit(): void {
    this.branches = this.branchesService.branches()
    if (this.branches.length === 0) {
      this.branchesService
        .fetchBranches()
        .subscribe(
          (result:any) => (this.branches = result.user.branches)
        );
    }
  }



}
