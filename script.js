function authenticate() {
    //The current password is lee and lee
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // You can implement your authentication logic here.
    // For simplicity, we'll use a simple check for this example.
    if (username === "lee" && password === "lee") {
    // Hide the login page and show the app page
    document.getElementById("loginPage").style.display = "none";
    window.location.href = "appPage.html";
    } else {
    alert("Login failed. Please check your username and password.");
    }
    }
    
    // Function to show a specific page and hide others
    function goToPage(pageId) {
    const pages = document.querySelectorAll('div[id]');
    for (const page of pages) {
    if (page.id === pageId) {
    page.style.display = 'block';
    } else {
    page.style.display = 'none';
    }
    }
    }
    function createButtons() {
    // Get the <ul> element by its id
    const ul = document.getElementById("buttonList");
    
    // Create an array of button labels
    const buttonLabels = ["Timer", "Profile", "WorkoutLogs","Calculator","Goals","Notes"];
    
    // Iterate through the array and create buttons for each label
    buttonLabels.forEach((label) => {
    // Create a <li> element to hold the button
    const li = document.createElement("li");
    
    // Create a button element
    const button = document.createElement("button");
    button.textContent = label; // Set the button label
    
    button.addEventListener("click", function () {
    if (label === "Timer") {
    // Navigate to the timer page when "Timer" is clicked
    window.location.href = "timer.html";
    } if (label ==="Profile") {
    window.location.href = "profile.html";
    }
    if (label ==="WorkoutLogs") {
    window.location.href = "workoutLogs.html";
    }
    
    if (label ==="Calculator") {
    window.location.href = "calc.html";
    }
    
    if (label ==="Goals") {
    window.location.href = "goals.html";
    }
    
    if (label ==="Notes") {
    window.location.href = "notes.html";
    }
    
    else {
    // For other buttons, navigate to other pages (you can update this part according to your page structure)
    // For example: window.location.href = `page_${label}.html`;
    }
    });
    
    // Append the button to the <li> element
    li.appendChild(button);
    
    // Append the <li> element (with the button) to the <ul>
    ul.appendChild(li);
    });
    }
    createButtons();
    
    
    
    
    
    
    
    
    
    
    //Timer Javascript Will be Below here
    
    //Till here
    