import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-branch-modal',
  templateUrl: './new-branch-modal.component.html',
  styleUrls: ['./new-branch-modal.component.css']
})
export class NewBranchModalComponent implements OnInit {

  name: string = ''
  balance: number = 0

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {

  }

  createBranch() {
    console.log(this.name)
    console.log(this.balance)
  }

}
