const assert = require('assert');
const { BankAccount } = require('../bankAccount');

//import { BankAccount } from "../bankAccount";

describe('BankAccount', function() {
    let account;

    beforeEach(function() {
        // Create a new BankAccount instance before each test
        account = new BankAccount(100);
    });

    it('should initialize with the given balance', function() {
        assert.strictEqual(account.getBalance(), 100);
    });

    it('should deposit money correctly', function() {
        account.deposit(50);
        assert.strictEqual(account.getBalance(), 150);
    });

    it('should withdraw money correctly when balance is sufficient', function() {
        const result = account.withdraw(50);
        assert.strictEqual(result, true);
        assert.strictEqual(account.getBalance(), 50);
    });

    it('should not withdraw money when balance is insufficient', function() {
        const result = account.withdraw(200);
        assert.strictEqual(result, false);
        assert.strictEqual(account.getBalance(), 100); // Balance should remain the same
    });

    it('should handle multiple deposits and withdrawals', function() {
        account.deposit(200);
        account.withdraw(50);
        account.deposit(100);
        assert.strictEqual(account.getBalance(), 350);
    });
});
