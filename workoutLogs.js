function addWorkoutEntry() {
    var date = prompt("Enter the workout date (e.g., YYYY-MM-DD):");
    var exercise = prompt("Enter the exercise name:");
    var sets = prompt("Enter the number of sets:");
    var reps = prompt("Enter the number of reps per set:");
    var weight = prompt("Enter the weight lifted (lbs):");

    var table = document.getElementById("workoutTable");
    var tbody = table.getElementsByTagName("tbody")[0];
    var newRow = tbody.insertRow(tbody.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = date;
    cell2.innerHTML = exercise;
    cell3.innerHTML = sets;
    cell4.innerHTML = reps;
    cell5.innerHTML = weight;
}