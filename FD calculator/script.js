function claculateMatuarityAmount(){
    
    //get input
    const principle = parseFloat(document.getElementById("principle").value)
    const interestRate = parseFloat(document.getElementById("interestRate").value)
    const tenure = parseFloat(document.getElementById("tenure").value)

    //perform calculation
    const maturatyAmount = principle + (principle*interestRate*tenure)/100;

    //display result
    document.getElementById('result').innerText = `Maturaty Amount : ${maturatyAmount.toFixed(2)} `

}

//attach the event listner to calculate button
document.getElementById('calculateBtn').addEventListener('click',claculateMatuarityAmount);