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
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }


};

document.querySelector('.new-budget-form').addEventListener('submit', newBudgetFormHandler);

/*var faqs_row = 0;
function addfaqs() {
html = '<tr id="faqs-row' + faqs_row + '">';
    html += '<td><input type="text" class="form-control" placeholder="User name"></td>';
    html += '<td><input type="text" placeholder="Product name" class="form-control"></td>';
    html += '<td class="text-danger mt-10"> 18.76% <i class="fa fa-arrow-down"></i></td>';
    html += '<td class="mt-10"><button class="badge badge-danger" onclick="$(\'#faqs-row' + faqs_row + '\').remove();"><i class="fa fa-trash"></i> Delete</button></td>';

    html += '</tr>';

$('#faqs tbody').append(html);

faqs_row++;
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
  
//document.getElementById('addRowIncome').addEventListener('click', addRowIncome);

let addRowIncome = document.querySelector('button');
let incomeTable = document.querySelector('income-table');

let income_sourceInput = document.querySelector('#income-source');
let income_receiptInput = document.querySelector('#income-receipt');
let income_remarkInput = document.querySelector('#income-remark');

btnAdd.addEventListener('click', () => {
  let income_source = income-sourceInput.value;
  let income_receipt = income-receiptInput.value;
  let income_remark = income-remarkInput;

  let template = `
            <tr>
              <td>${income_source}</td>
              <td>${income_receipt}</td>
              <td>${income_remark}</td>
            </tr>  
                  `;
   table.innerHTML += template; 
});*/