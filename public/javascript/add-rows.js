$(function () {
    $("#insertRow").on("click", function (event) {
        event.preventDefault();

        var newRow = $("<tr>");
        var cols = '';

        // Income table columns
        //cols += '<th scope="row">' + counter + '</th>';
        cols += '<td><input type="text" class="form-control" id="income-source" name="income-source"/>';
        cols += '<td><input type="text" class="form-control" id="income-receipt" name="income-receipt"/>';
        cols += '<td><input type="text" class="form-control" id="income-remark" name="income-remark"/>';



        //cols += '<td><button class="btn btn-danger rounded-0" id ="deleteRow"><i class="fa fa-trash"></i></button</td>';

        // Insert the columns inside a row
        newRow.append(cols);

        // Insert the row inside a table
        $("#income-table").append(newRow);
    });


    $("#insertRow2").on("click", function (event) {
        event.preventDefault();

        var newRow2 = $("<tr>");
        var cols = '';

        //Expense table columns

        cols += '<td><input type="text" class="form-control" id="expense-item" name="expense-item"/>';
        cols += '<td><input type="text" class="form-control" id="expense-payment" name="expense-payment"/>';
        cols += '<td><input type="text" class="form-control" id="expense-comment" name="expense-comment"/>';



        //cols += '<td><button class="btn btn-danger rounded-0" id ="deleteRow"><i class="fa fa-trash"></i></button</td>';

        // Insert the columns inside a row
        newRow2.append(cols);

        // Insert the row inside a table
        $("#expense-table").append(newRow2);
    });


});

