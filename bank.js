let balance_amount=0
deposit=(deposit_amount)=>{
    console.log("deposit amount")
    deposit_amount=balance_amount+deposit_amount
    return deposit_amount
}
let result=deposit(3000)

console.log("Total Balance=",result)
withdrawal=(withdrawal_amount)=>{
    console.log("Withdrawal amount")
    withdrawal_amount=result-withdrawal_amount
    return withdrawal_amount
}
let res=withdrawal(500)
console.log("Amount withdrawed=",res)
console.log("Available balance=",res)