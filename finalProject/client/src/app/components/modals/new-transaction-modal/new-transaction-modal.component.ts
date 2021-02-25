import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BRANCH_INTERFACE } from 'src/app/interfaces/branch.interface';

@Component({
  selector: 'app-new-transaction-modal',
  templateUrl: './new-transaction-modal.component.html',
  styleUrls: ['./new-transaction-modal.component.css'],
})
export class NewTransactionModalComponent implements OnInit {
  type: string = 'expense';
  paymentId: string = 'none';
  toId: string = 'none';
  amount: number = 0;
  note: string = '';

  branches: BRANCH_INTERFACE[] = [
    {
      _id: '1',
      name: 'Cash',
      balance: 0,
    },
    {
      _id: '2',
      name: 'Visa',
      balance: 1000,
    },
    {
      _id: '3',
      name: 'Saving',
      balance: 0,
    },
  ];

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}

  createTransaction() {
    console.log(this.type, this.paymentId, this.toId,this.amount, this.note);
  }

  toBranches() {
    return this.branches.filter((b) => b._id !== this.paymentId);
  }
}
