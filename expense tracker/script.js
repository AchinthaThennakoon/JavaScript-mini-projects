const expenses = [];

const expenseListElement = document.getElementById("expense-list");
const totalExpensesElement = document.getElementById("total-expense")
const addExpense = () => {
    let expenseDes = prompt("please enter your expense description :");
    let expense = parseFloat(prompt("please enter your expense amount :"));

    if (expenseDes && expense) {
        let expenseObj = {
            description: expenseDes,
            amount: expense
        }

        expenses.push(expenseObj);
        renderExpenses();
    }
}

const renderExpenses = () => {
    let items = "";
    let totalExpenses= 0;

    expenses.forEach(item => {
        items += `
        <li class="expense-item">
        <span class="expense">${item.description}</span>
        <span class="expense-amount">${item.amount}</span>
        <button onclick=deleteExpense(${item.description})>X</button>
        </li>
        `;

        totalExpenses+= item.amount;

    })

    expenseListElement.innerHTML = items;
    totalExpensesElement.innerText = totalExpenses;



}

const deleteExpense = (value) => {

    console.log(value);

    expenses = expenses.filter((item)=> item.description!== value);
    console.log(expenses);

    renderExpenses();

}