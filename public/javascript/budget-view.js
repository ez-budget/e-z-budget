// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Budget');
  data.addColumn('number', 'Amount');
  data.addRows([
    ['Income', 3],
    ['Expense', 1]
  ]);

  // Set chart options
  var options = {'title':'Income/ExpensePie Chart',
                 'width':400,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}



// async function newBudgetViewHandler(event) {
    //event.preventDefault();
    const total_income = budget.income_receipt;
    const total_expense = budget.expense_payment;
    const net_income = total_income - total_expense;
    let result = "";
    if (net_income < 0) {
        result = "DEFICIT";
    } 
    if (net_income > 0) {
        result = "SURPLUS";
    }
    if (net_income === 0) {
        result = "BALANCED";
    }

    let display_result = document.getElementById('result');
    display_result.textContent = 'budget surplus';
// }


//document.querySelector('.new-budget-form').addEventListener('submit', newBudgetViewHandler);
