function createBankAccount(initialBalance = 0) {
  let balance = initialBalance; //  private variable

  return {
    deposit(amount) {
      if (amount <= 0) {
        return "Deposit amount must be positive";
      }
      balance += amount;
      return `Deposited ₹${amount}. Balance: ₹${balance}`;
    },

    withdraw(amount) {
      if (amount <= 0) {
        return "Withdraw amount must be positive";
      }
      if (amount > balance) {
        return "Insufficient balance";
      }
      balance -= amount;
      return `Withdrew ₹${amount}. Balance: ₹${balance}`;
    },

    getBalance() {
      return `Current Balance: ₹${balance}`;
    }
  };
}

const myAccount = createBankAccount(1000);

console.log(myAccount.deposit(500));   // Deposited ₹500. Balance: ₹1500
console.log(myAccount.withdraw(300));  // Withdrew ₹300. Balance: ₹1200
console.log(myAccount.getBalance());   // Current Balance: ₹1200
