 // Your JavaScript code goes here
 function calculateMax(){

        var lbInput = parseFloat(document.getElementById("lbInput").value);
        var repInput = parseFloat(document.getElementById("repInput").value);

        if (isNaN(lbInput) || isNaN(repInput)) {
            alert("Please enter valid numeric values for LBS and Reps.");
            return;
        }
        var repMax = 0;
        
        repMax = lbInput * (1+0.0333*repInput);
         // Use the toFixed method to round to one decimal point
    repMax = repMax.toFixed(1);
     // Create an array of percentage values
    var percentages = [100,95, 90, 85, 80, 75, 70, 65, 60,55,50,45,40];

    // Get the table element by its ID
    var table = document.getElementById("logTable");

    // Get the table body
    var tableBody = table.getElementsByTagName("tbody")[0];

    // Clear any existing rows in the table body
    tableBody.innerHTML = "";

    // Loop through the percentages and add rows to the table
    for (var i = 0; i < percentages.length; i++) {
        var percentage = percentages[i];
        var calculatedValue = (repMax * (percentage / 100)).toFixed(1);

        var row = tableBody.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = percentage + "%";
        cell2.innerHTML = calculatedValue;
    }
 }
        
        
        
        