import { NewTransactionModalComponent } from './../../modals/new-transaction-modal/new-transaction-modal.component';
import { NewBranchModalComponent } from './../../modals/new-branch-modal/new-branch-modal.component';
import { Component, OnInit } from '@angular/core';
import { faCreditCard, faReceipt } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-default-bar',
  templateUrl: './default-bar.component.html',
  styleUrls: ['./default-bar.component.css']
})
export class DefaultBarComponent implements OnInit {
  addPaymentIcon = faCreditCard;
  addTransactionIcon = faReceipt;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openNewBranchModal() {
    this.modalService.open(NewBranchModalComponent)
  }
  openNewTransactionModal() {
    this.modalService.open(NewTransactionModalComponent)
  }

}
