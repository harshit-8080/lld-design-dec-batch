import { ATM } from "../atm";
import { Card } from "../card";
import { ICommand } from "../commands/Icommands";

export interface ATMState {
  insertCard(atm: ATM, card: Card): void;
  ejectCard(atm: ATM): void;
  enterPin(atm: ATM, pin: string): void;
  executeTransaction(atm: ATM, command: ICommand): boolean;
  displayBalance(atm: ATM): void;
}

export class IdleState implements ATMState {
  insertCard(atm: ATM, card: Card): void {
    const status = atm.getBank().validateCard(card);

    if (!status) {
      console.log("card is rejectedd....");
      return;
    }
    const account = atm
      .getBank()
      .getBankAccountByNumber(card.getAccountNumber());

      console.log("card has been inserted");
    atm.setCurrentAccount(account);
    atm.setCurrentCard(card);
    atm.setATMState(atm.getCardInsertedState());
  }
  ejectCard(atm: ATM): void {
    console.log("no card to eject");
  }
  enterPin(atm: ATM, pin: string): void {
    console.log("no you can't enter a pin");
  }
  executeTransaction(atm: ATM, command: ICommand): boolean {
    console.log("no you can't execute transatcion");
    return false;
  }
  displayBalance(atm: ATM): void {
    console.log("no you can't do display balance");
  }
}

export class CardInsertedState implements ATMState {
  insertCard(atm: ATM, card: Card): void {
    console.log("card already inserted....");
  }
  ejectCard(atm: ATM): void {
    const card = atm.getCurrentCard();
    if (!card) {
      console.log("not a valid card... to eject");
    }

    console.log("ejecting.... card ");
    atm.clearAccount();
    atm.clearCurrentCard();
    atm.setATMState(atm.getIdleState());
  }

  enterPin(atm: ATM, pin: string): void {
    const account = atm.getCurrentAccount();
    if (account.getPin() == pin) {
      console.log("pin verified.......");
      atm.setATMState(atm.getAuthenticatedState());
    } else {
      console.log("pin doesnt match....");
      atm.clearAccount();
      atm.clearCurrentCard();
      atm.setATMState(atm.getIdleState());
    }
  }
  executeTransaction(atm: ATM, command: ICommand): boolean {
    console.log("you can;t execute transations now");
    return false;
  }

  displayBalance(atm: ATM): void {
    console.log("you can'tt do this now");
  }
}

export class AuthenticatedState implements ATMState {
  insertCard(atm: ATM, card: Card): void {
    console.log("card already inserted....");
  }
  ejectCard(atm: ATM): void {
    const card = atm.getCurrentCard();
    if (!card) {
      console.log("not a valid card... to eject");
    }

    console.log("ejecting.... card ");
    atm.clearAccount();
    atm.clearCurrentCard();
    atm.setATMState(atm.getIdleState());
  }
  enterPin(atm: ATM, pin: string): void {
    console.log("can't enter pin now");
  }
  executeTransaction(atm: ATM, command: ICommand): boolean {
    const status = command.execute();
  
    if (!status) {
      atm.clearAccount();
      atm.clearCurrentCard();
      atm.setATMState(atm.getIdleState());
    }

    atm.addTransactionToHistory(command)
    return status
  }
  displayBalance(atm: ATM): void {
    const account = atm.getCurrentAccount()
    console.log("updated balance - ", account.getBalance());
    atm.clearAccount();
    atm.clearCurrentCard();
    atm.setATMState(atm.getIdleState())
  }
}
