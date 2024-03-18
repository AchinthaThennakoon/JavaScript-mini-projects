const calculate =()=>{
    const billAmount = parseFloat(document.getElementById('bill').value);
    const tip = parseFloat(document.getElementById('tip').value);

    const finalTip = billAmount * tip / 100;
    const totalBill = billAmount + finalTip;

    document.getElementById("tip-amount").innerHTML = finalTip;
    document.getElementById("total-amount").innerHTML = totalBill;
}