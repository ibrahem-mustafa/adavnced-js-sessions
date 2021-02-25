import { Component, OnInit } from '@angular/core';
import { TRANSACTION_INTERFACE } from 'src/app/interfaces/transaction.interface';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: TRANSACTION_INTERFACE[] = [
    {
      _id: '1',
      type: 'income',
      note: 'Salary',
      amount: 2000,
      paymentId: '1',
      paymentName: 'Cash',
      toId: '1',
      toName: 'Cash',
      date: new Date()
    },
    {
      _id: '2',
      type: 'expense',
      note: 'buy tools',
      amount: 200,
      paymentId: '1',
      paymentName: 'Cash',
      toId: '1',
      toName: 'Cash',
      date: new Date()
    },
    {
      _id: '3',
      type: 'transfer',
      note: 'To Bank Visa',
      amount: 600,
      paymentId: '1',
      paymentName: 'Cash',
      toId: '2',
      toName: 'Visa',
      date: new Date()
    },
    {
      _id: '4',
      type: 'income',
      note: 'small cash',
      amount: 100,
      paymentId: '1',
      paymentName: 'Cash',
      toId: '1',
      toName: 'Cash',
      date: new Date()
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
