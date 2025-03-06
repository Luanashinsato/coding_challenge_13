// Task 2: Adding Employee Cards Dynamically 
// Writing a function to build an employee card 
function addEmployeeCard(name, position) {
    const employeeContainer = document.getElementById("employeeContainer"); // Selecting the employee container where cards will be added

    // Creating a div element to represent the card
    const card = document.createElement("div");
    card.setAttribute("class", "employee-card"); // Setting class attribute 

    // Creating a h3 element for the employee's name 
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name; 

    // Creating a p element for the employee's position
    const positionParagraph = document.createElement("p");
    positionParagraph.textContent = position; 

    // Creating a button element for removing the employee card 
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", (event) => {
        employeeContainer.removeChild(card); // Adding an event listener for the click event 
        event.stopPropagation(); // Task 4 - Preventing event bubbling to container
    }); 

    // Task 5 - Creating an edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", (event) => {
        enableEditing(card, nameHeading, positionParagraph, editButton);
        event.stopPropagation();
    });

    card.appendChild(nameHeading); // Appending name heading 
    card.appendChild(positionParagraph); // Appending position paragraph 
    card.appendChild(removeButton); // Appending remove button 
    card.appendChild(editButton); // Task 5 - Appending edit button 
    employeeContainer.appendChild(card); // Appending employee card to employee container 
}
addEmployeeCard("Emma Smith", "Project Manager") // Calling the function to add employee 1 
addEmployeeCard("William Brown", "Data Analyst") // Calling the function to add employee 2
addEmployeeCard("David Anderson", "Software Engineer") // Calling the function to add employee 3
addEmployeeCard("Olivia Martinez", "Marketing Specialist") // Calling the function to add employee 4



// Task 3: Converting NodeLists to Arrays for Bulk Updates
// Using querySelectorAll to select all elements with the employee card class
const employeeCards = document.querySelectorAll(".employee-card");

// Converting the NodeList into an array
const employeeCardsArray = Array.from(employeeCards);

// Using an array method to update each card's style; here, I'm adding a blue border 
employeeCardsArray.forEach(card => {
    card.style.border = "2px solid navy";
})


// Task 4: Implementing Removal of Employee Cards with Event Bubbling
// Selecting the employee container 
const employeeContainer = document.getElementById('employeeContainer'); 

// Attaching an event listener to the parent container to log when it is clicked
employeeContainer.addEventListener("click", (event) => {
    let card = event.target.closest(".employee-card");
    if (card) {
    console.log("Employee Card clicked");
    }
});


// Task 5: Additional Challenge – Inline Editing of Employee Details
function enableEditing(card, nameHeading, positionParagraph, editButton) {
    // Creating input fields for name and position 
    const nameInput = document.createElement("input");
    nameInput.type = "text"; // Setting input type to text 
    nameInput.value = nameHeading.textContent; // Pre-filling with existing name 
    
    const positionInput = document.createElement("input");
    positionInput.type = "text"; // Setting input type to text 
    positionInput.value = positionParagraph.textContent; // Pre-filling with existing position
    
    // Creating save button to apply changes 
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => {
        // Updating the heading and paragraph with new input values 
        nameHeading.textContent = nameInput.value;
        positionParagraph.textContent = positionInput.value;
        
        // Restoring original elements after saving 
        card.replaceChild(nameHeading, nameInput);
        card.replaceChild(positionParagraph, positionInput);
        card.replaceChild(editButton, saveButton);
    });
    
    // Replacing static text with input fields
    card.replaceChild(nameInput, nameHeading);
    card.replaceChild(positionInput, positionParagraph);
    card.replaceChild(saveButton, editButton);
}
