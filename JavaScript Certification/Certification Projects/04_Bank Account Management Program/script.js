class Transaction {
  constructor(type, amount) {
    this.type = type;
    this.amount = amount;
  }
}

class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }

    this.transactions.push(new Transaction("deposit", amount));
    this.balance += amount;
    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }

    this.transactions.push(new Transaction("withdraw", amount));
    this.balance -= amount;
    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const depositAmounts = this.transactions
      .filter(({ type }) => type === "deposit")
      .map(({ amount }) => amount)
      .join(",");
    return `Deposits: ${depositAmounts}`;
  }

  listAllWithdrawals() {
    const withdrawAmounts = this.transactions
      .filter(({ type }) => type === "withdraw")
      .map(({ amount }) => amount)
      .join(",");
    return `Withdrawals: ${withdrawAmounts}`;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(50);
myAccount.deposit(60);
myAccount.deposit(40);
myAccount.withdraw(10);
myAccount.withdraw(30);
