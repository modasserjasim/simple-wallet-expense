document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawalInputAmount = parseFloat(withdrawAmountString);

    const withdrawText = document.getElementById('withdraw-amount');
    const withdrawCurrentAmount = withdrawText.innerText;
    const withdrawCurrentAmountString = parseFloat(withdrawCurrentAmount);
    const withdrawCurrentTotal = withdrawCurrentAmountString;

    const withdrawalTotal = withdrawalInputAmount + withdrawCurrentTotal;
    withdrawText.innerText = withdrawalTotal;

    // remove from the main balance

       //add balance amount
       const balanceCurrentAmount = document.getElementById('balance-amount');
       const balanceCurrentAmountString = balanceCurrentAmount.innerText;
       const balanceTotalAmount = parseFloat(balanceCurrentAmountString);
       
       const balanceTotal = balanceTotalAmount - withdrawalInputAmount;
       balanceCurrentAmount.innerText = balanceTotal;
   
       withdrawField.value = '';
})