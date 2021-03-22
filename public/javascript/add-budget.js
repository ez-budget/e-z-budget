async function newBudgetFormHandler(event) {
    event.preventDefault();
  
    const budget_title = document.querySelector('input[name="budget-title"]').value;
  
    const response = await fetch(`/api/budgets`, {
      method: 'POST',
      body: JSON.stringify({
        budget_title
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
}
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
document.querySelector('.new-budget-form').addEventListener('submit', newBudgetFormHandler);
//document.getElementById('addRowIncome').addEventListener('click', addRowIncome);