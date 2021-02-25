import { Component, OnInit } from '@angular/core';
import { TRANSACTION_INTERFACE } from 'src/app/interfaces/transaction.interface';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: TRANSACTION_INTERFACE[] = [

  ]
  constructor(private transactionsService: TransactionsService) { }

  ngOnInit(): void {

    this.transactionsService.fetchTransactions().subscribe(
      (result: any) => this.transactions = result.transactions ,
      error => console.log(error)
    )

  }

}
