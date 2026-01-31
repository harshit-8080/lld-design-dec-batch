import { BankAccount } from "../account";
import { ICommand } from "./Icommands";

export class WithdrawCommand implements ICommand {
  private success: boolean = false;

  constructor(
    private account: BankAccount,
    private amount: number,
  ) {}

  execute(): boolean {
    if (this.account) {
      this.success = this.account.withdraw(this.amount);
      console.log("withdraw has been done for amount ", this.amount, "updated balance ", this.account.getBalance());

      return this.success;
    }
    return false;
  }
  undo(): boolean {
    if (this.account) {
      this.success = this.account.deposit(this.amount);
              console.log("withdraw has been done for amount ", this.amount, "updated balance ", this.account.getBalance());

      return this.success;
    }
    return false;
  }
}
