document.getElementById('deposit-button').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);

    if(depositAmount > 0 || depositAmount == NaN){
        const depositCurrentAmount = document.getElementById('deposit-amount');
        const depositCurrentAmountString = depositCurrentAmount.innerText;
        const depositCurrentTotalAmount = parseFloat(depositCurrentAmountString);

        const depositTotal = depositAmount + depositCurrentTotalAmount;
        depositCurrentAmount.innerText = depositTotal;

        //add balance amount
        const balanceCurrentAmount = document.getElementById('balance-amount');
        const balanceCurrentAmountString = balanceCurrentAmount.innerText;
        const balanceTotalAmount = parseFloat(balanceCurrentAmountString);
        
        const balanceTotal = balanceTotalAmount + depositAmount;
        balanceCurrentAmount.innerText = balanceTotal;
    } else{
        alert('Please enter a valid integer number');
    }

    depositField.value = '';
    
    
})