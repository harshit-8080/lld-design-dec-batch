import { basename } from "path";
import { BankAccount } from "./src/account";
import { ATM } from "./src/atm";
import { Bank } from "./src/bank";
import { Card } from "./src/card";
import { WithdrawCommand } from "./src/commands/withdrawCommand";

const sbi_bank = Bank.getInstance()

const atm = new ATM("asdf", "hyd", 1000, sbi_bank)

const harshit_account = new BankAccount(crypto.randomUUID(), "Harshit", 1200, "1122")
sbi_bank.addAccount(harshit_account.getAccountNumber(), harshit_account)

const harshit_debit_card = new Card(crypto.randomUUID(), "HARSHIT", harshit_account.getAccountNumber())


atm.insertCard(harshit_debit_card)
atm.enterPin("1122")
atm.executeTransaction(new WithdrawCommand(harshit_account,300))
atm.executeTransaction(new WithdrawCommand(harshit_account,100))
atm.executeTransaction(new WithdrawCommand(harshit_account,200))
atm.displayBalance()

console.log(atm.getHistory());




