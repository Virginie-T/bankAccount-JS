describe('bankAccount', function() {
    describe('deposit', function() {
        it('it will deposit a specified amount into balance', function() {
            var testBankAccount = Object.create(bankAccount);
            testBankAccount.deposit(10);
            expect(testBankAccount.balance).to.equal(10);
        });
    });
});
