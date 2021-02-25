import { BRANCH_INTERFACE } from "./branch.interface";
import { TRANSACTION_INTERFACE } from "./transaction.interface";

export interface USER_INTERFACE {
  id: string;
  name: string;
  email: string;
  branches: BRANCH_INTERFACE[];
  transactions: TRANSACTION_INTERFACE[];
}
