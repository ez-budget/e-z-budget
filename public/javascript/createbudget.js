// add income
function addMoney() {
    let totalBudget = parseInt(document.getElementById("totalBudget").value);
    let currentBalance = parseInt(document.getElementById("currentBalance").value);
    let incomeName = document.getElementById('incomeName').value;
    let incomeAmount = parseInt(document.getElementById('incomeAmount').value);

    if (incomeAmount == "" || isNaN(incomeAmount)) {
      alert("Please enter a valid number");
    }
    else {
      totalBudget += incomeAmount;
      currentBalance += incomeAmount;
      document.getElementById("totalBudget").value = totalBudget;
      document.getElementById("currentBalance").value = currentBalance;
    } 
    //display income      
    let para = document.createElement ('p');
    para.value = `Income Name: ${incomeName} <br> Income Amount: ${incomeAmount}`;
    document.getElementById("addedMoney").appendChild(para);
    console.log(incomeAmount, incomeName);
    };
  
  //add expenses
    function addExpense() {
    let currentBalance = parseInt(document.getElementById("currentBalance").value);
    let expenseName = document.getElementById('expenseName').value;
    let expenseAmount = parseInt(document.getElementById('expenseAmount').value);
    if (expenseName.length == " ") {
      alert("Please enter an expense name");
    }
    else if (expenseAmount == " " || isNaN(expenseAmount)) {
      alert("Please enter a valid expense amount");
    }
    else if (expenseAmount <= currentBalance) {
     currentBalance -= expenseAmount;
     document.getElementById('currentBalance').value = currentBalance;
     
     let para = document.createElement ('p')
     para.value = `Expense Name: ${expenseName} <br> Expense Amount: ${expenseAmount}`;
     document.getElementById("addedExpenses").appendChild(para);
   }  
   else
    alert("Sorry your expense amount is higher thatn your current balance");
  }
  //display added expenses
  function addedExpense() {
    let currentBalance = parseInt(document.getElementById("currentBalance").value);
    let expenseName = document.getElementById("expenseName").value;
    let expenseAmount = parseInt(document.getElementById('expnseAmount').value);
    if (expenseName.length == " ") {
      alert("Please enter an expense name");
    }
    else if (expenseAmount == " " || isNaN(expenseAmount)){
      alert("Please enter a valid amount");
    }
    else if (expenseAmount <= currentBalance) {
      currentBalance -= expenseAmount;
      document.getElementById("currentBalance").value = currentBalance
      let para = document.createElement('p')
      para.value = `Expense name:  ${expenseName} <br> Expense Amount: ${expenseAmount}`;
      document.getElementById("addedExpense").appendChild(para);
    }
    else {
      alert("Sorry your expense amount is higher than your current balance")
    };
  };