// Display results on google charts

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
    ['Income', total_income],
    ['Expense', total_expense]
  ]);

  // Set chart options
  var options = {'title':'Income/Expense Pie Chart',
                 'width':400,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

// Show the budget trade-off message

const incomeReceipt = parseInt(document.querySelector('input[name="incomereceipt"]').value);
const expensePayment = parseInt(document.querySelector('input[name="expensepayment"]').value);


const total_income = incomeReceipt;
const total_expense = expensePayment;
    
    let net_income = total_income - total_expense;
    let result = "";
    if (net_income < 0) {
        result = "BUDGET DEFICIT";
    } 
    if (net_income > 0) {
        result = "BUDGET SURPLUS";
    }
    if (net_income === 0) {
        result = "BALANCED BUDGET";
    }
    let display_result = document.getElementById('result');
    display_result.innerHTML = "STATUS: " + result;
   



//document.querySelector('.new-budget-form').addEventListener('submit', newBudgetViewHandler);
