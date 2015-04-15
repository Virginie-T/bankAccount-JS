var bankAccount = {
    balance: 0,
    deposit: function(amount) {
        this.balance += amount;
    },
    withdraw: function(amount) {
        this.balance -= amount;
    }
};
