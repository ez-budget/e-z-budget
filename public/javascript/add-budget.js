const response = await fetch(`/api/budget`, {
    method: 'POST',
    body: JSON.stringify({
        user_id,
        budget_title,
        incomeName,
        incomeAmount,
        expenseName,
        expenseAmount
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


document.querySelector('.new-budget-form').addEventListener('submit', newFormHandler);
