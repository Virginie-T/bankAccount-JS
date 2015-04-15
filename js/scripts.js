var bankAccount = {
    balance: 0,
    deposit: function(amount) {
        this.balance += parseInt(amount);
    },
    withdraw: function(amount) {
        this.balance -= parseInt(amount);
    }
};


$(document).ready(function() {
    $('form#add').submit(function(event) {
        event.preventDefault();
        var name = $('input#name').val();
        var initial_Deposit = $('input#initial_Deposit').val();
        var bankAccount1 = Object.create(bankAccount);
            bankAccount1.deposit(initial_Deposit);
            $('.final_balance').text(bankAccount1.balance);
    });
    $('form#input_money').submit(function(event) {
        event.preventDefault();
        var deposit = $('input#deposit').val();
        var withdraw = $('input#withdraw').val();
        bankAccount1 = Object.create(bankAccount);
        var new_deposit = $('input#initial_Deposit').val();
        console.log(new_deposit);
        bankAccount1.balance = new_deposit;
        bankAccount1.deposit(deposit);
        $('.final_balance').text(bankAccount1.balance);

    });

});
