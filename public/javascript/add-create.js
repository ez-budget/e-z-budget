/*async function newCreateFormHandler(event) {
    event.preventDefault();
  
    const budget_title = document.querySelector('input[name="budget-title"]').value;
    const incomeName = document.querySelector('input[name="incomeName"]').value;
    const incomeAmount = document.querySelector('input[name="incomeAmount"]').value;
   
    const expenseName= document.querySelector('input[name="expenseName"]').value;
    const expenseAmount = document.querySelector('input[name="expenseAmount"]').value;
    const total_budget = document.querySelector('input[name="total-budget"]').value;
    const current_balance = document.querySelector('input[name="current-balance"]').value;
    
    
    const response = await fetch(`/api/finances`, {
      method: 'POST',
      body: JSON.stringify({
        budget_title,
        incomeName,
        incomeAmount,
        expenseName,
        expenseAmount,
        total_budget,
        current_balance
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }


};

document.querySelector('.new-create-form').addEventListener('submit', newCreateFormHandler);

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
//document.getElementById('addRowIncome').addEventListener('click', addRowIncome);*/
