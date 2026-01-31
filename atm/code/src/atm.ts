import { BankAccount } from "./account";
import { Bank } from "./bank";
import { Card } from "./card";
import { ICommand } from "./commands/Icommands";
import {
  ATMState,
  AuthenticatedState,
  CardInsertedState,
  IdleState,
} from "./state/atmState";

export class ATM {
  private atmId: string;
  private location: string;
  private cashAvailable: number;
  private bank: Bank;

  private currentState: ATMState;
  private transactionHistory: ICommand[] = [];
  private currentCard: Card = null;
  private currentAccount: BankAccount = null;

  // ????
  private idleState: ATMState = new IdleState();
  private cardInsertedState: ATMState = new CardInsertedState();
  private authenticatedState: ATMState = new AuthenticatedState();
  // ????

  constructor(
    atmId: string,
    location: string,
    cashAvailable: number,
    bank: Bank,
  ) {
    this.atmId = atmId;
    this.location = location;
    this.cashAvailable = cashAvailable;
    this.bank = bank;

    this.currentState = this.idleState
  }

  getIdleState(): ATMState {
    return this.idleState;
  }

  getCardInsertedState(): ATMState {
    return this.cardInsertedState;
  }

  getAuthenticatedState(): ATMState {
    return this.authenticatedState;
  }

  setATMState(state: ATMState) {
    this.currentState = state;
  }

  getCurrentState(): ATMState {
    return this.currentState;
  }

  getCurrentCard(): Card {
    return this.currentCard;
  }

  clearCurrentCard(){
    this.currentCard = null
  }

  clearAccount(){
    this.currentAccount= null
  }

  setCurrentCard(card: Card): void {
    this.currentCard = card;
  }

  getCurrentAccount(): BankAccount {
    return this.currentAccount;
  }

  setCurrentAccount(account: BankAccount): void {
    this.currentAccount = account;
  }

  getBank(): Bank {
    return this.bank;
  }

  addTransactionToHistory(command: ICommand) {
    this.transactionHistory.push(command);
  }

  insertCard(card: Card){
    this.getCurrentState().insertCard(this,card)
  }
  ejectCard(): void {
    this.getCurrentState().ejectCard(this);
  }

  enterPin(pin: string): void {
    this.getCurrentState().enterPin(this, pin);
  }

  executeTransaction(command: ICommand): boolean {
    return this.getCurrentState().executeTransaction(this, command);
  }

  displayBalance(): void {
    this.currentState.displayBalance(this);
  }

  getHistory(){
    return this.transactionHistory
  }

  //   undoLastTransaction(): void{}
}
