async function editBudgetFormHandler(event) {
    event.preventDefault();
  
    const budget_title = document.querySelector('input[name="budget-title"]').value.trim();
   
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/budgets/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        budget_title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.edit-budget-form').addEventListener('click', editBudgetFormHandler);
  