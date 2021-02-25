import { Component, OnInit, Input } from '@angular/core';
import { faDollarSign, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TRANSACTION_INTERFACE } from 'src/app/interfaces/transaction.interface';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.css'],
})
export class TransactionListItemComponent implements OnInit {
  @Input() transaction!: TRANSACTION_INTERFACE;

  dollarIcon = faDollarSign;
  deleteIcon = faTrash;
  constructor() {}

  ngOnInit(): void {}

  deleteTransaction() {
    console.log('delete Transaction')
  }

  colorState() {
    return {
      'text-success': this.transaction.type === 'income',
      'text-danger': this.transaction.type === 'expense',
      'text-info': this.transaction.type === 'transfer',
    };
  }
}
