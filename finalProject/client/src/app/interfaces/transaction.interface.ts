export interface TRANSACTION_INTERFACE {
  _id: string;
  type: string;
  note: string;
  amount: number;
  paymentId: string;
  paymentName: string;
  toId: string;
  toName: string;
  date: Date
}
