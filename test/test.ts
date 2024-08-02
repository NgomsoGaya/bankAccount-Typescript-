import assert from 'assert';
import BankAccount from '../bankAccount';
import Bank from '../multiBankAccount';

describe('BankAccount', function() {
    it('should initialize with the correct balance', function() {
        const account = new BankAccount(100);
        assert.strictEqual(account.getBalance(), 100);
    });

    it('should deposit money correctly', function() {
        const account = new BankAccount(100);
        account.deposit(50);
        assert.strictEqual(account.getBalance(), 150);
    });

    it('should withdraw money correctly when balance is sufficient', function() {
        const account = new BankAccount(100);
        const result = account.withdraw(50);
        assert.strictEqual(result, true);
        assert.strictEqual(account.getBalance(), 50);
    });

    it('should not withdraw money when balance is insufficient', function() {
        const account = new BankAccount(100);
        const result = account.withdraw(150);
        assert.strictEqual(result, false);
        assert.strictEqual(account.getBalance(), 100);
    });
});

describe('Bank', function() {
    it('should add an account correctly', function() {
        const bank = new Bank();
        bank.addAccount('123', 100);
        const account = bank.getAccount('123');
        assert(account !== undefined);
        assert.strictEqual(account!.getBalance(), 100);
    });

    it('should throw an error when adding an account that already exists', function() {
        const bank = new Bank();
        bank.addAccount('123', 100);
        assert.throws(() => {
            bank.addAccount('123', 200);
        }, /Account already exists/);
    });

    it('should remove an account correctly', function() {
        const bank = new Bank();
        bank.addAccount('123', 100);
        bank.removeAccount('123');
        const account = bank.getAccount('123');
        assert.strictEqual(account, undefined);
    });

    it('should throw an error when removing an account that does not exist', function() {
        const bank = new Bank();
        assert.throws(() => {
            bank.removeAccount('123');
        }, /Account does not exist/);
    });

    it('should deposit money into an account correctly', function() {
        const bank = new Bank();
        bank.addAccount('123', 100);
        bank.deposit('123', 50);
        const account = bank.getAccount('123');
        assert.strictEqual(account!.getBalance(), 150);
    });

    it('should throw an error when depositing to an account that does not exist', function() {
        const bank = new Bank();
        assert.throws(() => {
            bank.deposit('123', 50);
        }, /Account not found/);
    });

    it('should withdraw money from an account correctly when balance is sufficient', function() {
        const bank = new Bank();
        bank.addAccount('123', 100);
        const result = bank.withdraw('123', 50);
        assert.strictEqual(result, true);
        const account = bank.getAccount('123');
        assert.strictEqual(account!.getBalance(), 50);
    });

    it('should not withdraw money from an account when balance is insufficient', function() {
        const bank = new Bank();
        bank.addAccount('123', 100);
        const result = bank.withdraw('123', 150);
        assert.strictEqual(result, false);
        const account = bank.getAccount('123');
        assert.strictEqual(account!.getBalance(), 100);
    });

    it('should throw an error when withdrawing from an account that does not exist', function() {
        const bank = new Bank();
        assert.throws(() => {
            bank.withdraw('123', 50);
        }, /Account not found/);
    });
});
