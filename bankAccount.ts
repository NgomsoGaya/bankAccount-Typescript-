class BankAccount {

    // create a private variable - this is not accessible from out side of the class 
    private balance : number
    //
    constructor(balance : number) {
      this.balance = balance;
    }
    
    public getBalance(){
      return this.balance;
    }
    
    public deposit(amount : number) : void {
      this.balance = this.balance + amount;
    }
    
    public withdraw( amount : number) {
      if (this.balance > amount) {
          this.balance = this.balance - amount;
          return true;
      }
      return false;
    }
    
}
export default BankAccount;