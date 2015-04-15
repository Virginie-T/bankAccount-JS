var bankAccount = {
    balance: 0,
    deposit: function(amount) {
        this.balance += parseInt(amount);
    },
    withdraw: function(amount) {
        this.balance -= parseInt(amount);
    }
};


$(function() {
    $('form#add').submit(function(event) {
        event.preventDefault();
        var name = $('input#name').val();
        var initial_Deposit = $('input#initial_Deposit').val();
        var bankAccount1 = Object.create(bankAccount);
            bankAccount1.deposit(initial_Deposit);



        $('.final_balance').text(bankAccount1.balance);



    });
});
