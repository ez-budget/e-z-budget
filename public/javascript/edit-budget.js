async function editBudgetFormHandler(event) {
    event.preventDefault();
  
    const budget_title = document.querySelector('input[name="budget-title"]').value.trim();
    const income_source = document.querySelector('input[name="income-source"]').value.trim();
    const income_receipt = document.querySelector('input[name="income-receipt"]').value.trim();
    const income_remark = document.querySelector('input[name="income-remark"]').value.trim();
    const expense_item = document.querySelector('input[name="expense-item"]').value.trim();
    const expense_payment = document.querySelector('input[name="expense-payment"]').value.trim();
    const expense_comment = document.querySelector('input[name="expense-comment"]').value.trim();
   
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/budgets/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        budget_title,
        income_source,
        income_receipt,
        income_remark,
        expense_item,
        expense_payment,
        expense_comment
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace(`/dashboard/budget/${id}`);
    } else {
      alert(response.statusText);
    }
  }
  
document.querySelector('.edit-budget-form').addEventListener('click', editBudgetFormHandler);
  