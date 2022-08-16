document.getElementById('deposit-button').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);
    console.log(depositAmount)

    const depositCurrentAmount = document.getElementById('deposit-amount');
    const depositCurrentAmountString = depositCurrentAmount.innerText;
    const depositTotalAmount = parseFloat(depositCurrentAmountString);

    const depositTotal = depositAmount + depositTotalAmount;
    depositCurrentAmount.innerText = depositTotal;

    //add balance amount
    const balanceCurrentAmount = document.getElementById('balance-amount');
    const balanceCurrentAmountString = balanceCurrentAmount.innerText;
    const balanceTotalAmount = parseFloat(balanceCurrentAmountString);
    
    const balanceTotal = balanceTotalAmount + depositAmount;
    balanceCurrentAmount.innerText = balanceTotal;

    depositField.value = '';
    
    
})