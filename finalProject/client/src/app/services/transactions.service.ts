import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  transactionsUrl = 'http://localhost:3000/swift/transaction'
  constructor(private http: HttpClient) { }

  getHeaders() {
    return {
      authorization: window.localStorage.getItem('token')!
    }
  }
  fetchTransactions() {
    return this.http.get(this.transactionsUrl, {headers: this.getHeaders()})
  }
}
