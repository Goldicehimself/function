


const BANKS_NAME = "Our Money Bank";

const customerAccounts =[{
     accountId: 1001,
     accountHolder: "Isioma Golden",
     balance: 500.00,
     type :"savings"
},
 {
    accountId: 1002,
    accountHolder: "Amina Yusuf",
    balance: 1500.00,
    type : "current",
 }
];

function checkBalance(accountId){
    const account = customerAccounts.find(acct => acct.accountId === accountId); 
    if(account){
        return `Bank Name: ${BANKS_NAME}, Account Holder: ${account.accountHolder}, Balance: $${account.balance.toFixed(2)}
         Id: ${account.accountId}`;
    }
    else{
        return "Account not found.";
    }

}
console.log(checkBalance(1001)); // to test check balance
console.log(checkBalance(1002));
//console.log(checkBalance(1003));  used to test account not found


//function with is agruments accountId and amount
function deposit(accountId, amount ) {
    const account = customerAccounts.find(acct => acct.accountId === accountId);
    if(account){
        account.balance += amount;
        return `Deposited $${amount.toFixed(2)} to Account ID: ${account.accountId}. New Balance: $${account.balance.toFixed(2)}`;
    }
    else{
        return "Account not found.";
    }

}
console.log(deposit(1001, 200)); // to test deposit
console.log(deposit(1002, 400));


function withdraw(accountId, amount){
    const account = customerAccounts.find(acct => acct.accountId === accountId);
    const Fee_Rate = 0.02; // 2% fee
    const fee = amount * Fee_Rate;
    if(account){
        const totalDeduction = amount + fee;
        if(account.balance >= totalDeduction){
            account.balance -= totalDeduction;
            return `Withdrew $${amount.toFixed(2)}  from Account ID: ${account.accountId}. New Balance: $${account.balance.toFixed(2)} (Fees Applied: $${fee.toFixed(2)})`;
        }
        else{
            return ` Account Name: ${account.accountHolder} Insufficient funds. Account Type: ${account.type}. Current Balance: $${account.balance.toFixed(2)}`;
        }
    }
    else{
        return "Account not found.";
    }

}
console.log(withdraw(1001, 100)); // to test successful withdrawal
console.log(withdraw(1002, 2000)); // to test insufficient funds withdrawal

console.log(checkBalance(1001)); // to check balance after transactions
console.log(checkBalance(1002));

