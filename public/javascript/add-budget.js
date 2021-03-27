async function newBudgetFormHandler(event) {
    event.preventDefault();
  
    const budget_title = document.querySelector('input[name="budget-title"]').value;
    const income_source = document.querySelector('input[name="income-source"]').value;
    const income_receipt = document.querySelector('input[name="income-receipt"]').value;
    const income_remark = document.querySelector('input[name="income-remark"]').value;
    const expense_item = document.querySelector('input[name="expense-item"]').value;
    const expense_payment = document.querySelector('input[name="expense-payment"]').value;
    const expense_comment = document.querySelector('input[name="expense-comment"]').value;
    
    
    const response = await fetch(`/api/budgets`, {
      method: 'POST',
      body: JSON.stringify({
        budget_title,
        income_source,
        income_receipt,
        income_remark,
        expense_item,
        expense_payment,
        expense_comment
        // ,
        // total_income,
        // total_expense,
        // net_income,
        // result
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
<<<<<<< HEAD
      document.location.replace('/dashboard/');
=======
      document.location.replace('/dashboard');
>>>>>>> develop
    } else {
      alert(response.statusText);
    }


};

document.querySelector('.new-budget-form').addEventListener('submit', newBudgetFormHandler);

/*
function addRowIncome(event) {
    event.preventDefault();
    var table = document.getElementById("income-table");
    var row = table.insertRow(3);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = '<input type="text" class="form-control" id="income-source" name="income-source"/>';
    cell2.innerHTML = '<input type="text" class="form-control" id="income-receipt" name="income-receipt"/>'; 
    cell3.innerHTML = '<input type="text" class="form-control" id="income-remark" name="income-remark"/>'; 
}
  */
//document.getElementById('addRowIncome').addEventListener('click', addRowIncome);