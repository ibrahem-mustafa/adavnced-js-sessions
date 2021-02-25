import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BranchesService } from 'src/app/services/branches.service';
import { BranchListComponent } from '../../branches/branch-list/branch-list.component';

@Component({
  selector: 'app-new-branch-modal',
  templateUrl: './new-branch-modal.component.html',
  styleUrls: ['./new-branch-modal.component.css'],
})
export class NewBranchModalComponent implements OnInit {
  name: string = '';
  balance: number = 0;

  constructor(public modal: NgbActiveModal, private branchesService: BranchesService) {}

  ngOnInit(): void {}

  createBranch() {
    this.branchesService.createBranch(this.name, this.balance).subscribe(
      (result:any) => this.branchesService.branches = result.branches
    );
  }
}
