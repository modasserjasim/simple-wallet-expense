document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawalInputAmount = parseFloat(withdrawAmountString);

    if(withdrawalInputAmount > 0 || withdrawalInputAmount == NaN){
        const withdrawText = document.getElementById('withdraw-amount');
        const withdrawCurrentAmount = withdrawText.innerText;
        const withdrawCurrentAmountString = parseFloat(withdrawCurrentAmount);
        const withdrawCurrentTotal = withdrawCurrentAmountString;


       //add balance amount
       const balanceCurrentAmount = document.getElementById('balance-amount');
       const balanceCurrentAmountString = balanceCurrentAmount.innerText;
       const balanceTotalAmount = parseFloat(balanceCurrentAmountString);

       if(withdrawalInputAmount > balanceTotalAmount){
         alert("You don't have sufficient balance");
         withdrawField.value = '';
         return;
       }
        // remove from the main balance
       const withdrawalTotal = withdrawalInputAmount + withdrawCurrentTotal;
       withdrawText.innerText = withdrawalTotal;
       
       const balanceTotal = balanceTotalAmount - withdrawalInputAmount;
       balanceCurrentAmount.innerText = balanceTotal;
       withdrawField.value = '';
    } else{
        alert('Please input a valid number')
    }
   
       
})