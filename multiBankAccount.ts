import BankAccount from './bankAccount';
class Bank {
    private accounts: Map<string, BankAccount>;

    constructor() {
        this.accounts = new Map<string, BankAccount>();
    }

    // Add a new account
    public addAccount(accountId: string, initialBalance: number): void {
        if (this.accounts.has(accountId)) {
            throw new Error('Account already exists');
        }
        const newAccount = new BankAccount(initialBalance);
        this.accounts.set(accountId, newAccount);
    }

    // Remove an account by its ID
    public removeAccount(accountId: string): void {
        if (!this.accounts.has(accountId)) {
            throw new Error('Account does not exist');
        }
        this.accounts.delete(accountId);
    }

    // Get an account by its ID
    public getAccount(accountId: string): BankAccount | undefined {
        return this.accounts.get(accountId);
    }

    // Deposit money into an account
    public deposit(accountId: string, amount: number): void {
        const account = this.getAccount(accountId);
        if (!account) {
            throw new Error('Account not found');
        }
        account.deposit(amount);
    }

    // Withdraw money from an account
    public withdraw(accountId: string, amount: number): boolean {
        const account = this.getAccount(accountId);
        if (!account) {
            throw new Error('Account not found');
        }
        return account.withdraw(amount);
    }
}
export default Bank;