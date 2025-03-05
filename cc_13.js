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
    removeButton.addEventListener("click", () => {
        employeeContainer.removeChild(card); // Adding an event listener for the click event 
    }); 

    card.appendChild(nameHeading); // Appending name heading 
    card.appendChild(positionParagraph); // Appending position paragraph 
    card.appendChild(removeButton); // Appending remove button 
    employeeContainer.appendChild(card); // Appending employee card to employee container 
}
addEmployeeCard("Emma Smith", "Project Manager") // Calling the function to add employee 1 
addEmployeeCard("William Brown", "Data Analyst") // Calling the function to add employee 2
addEmployeeCard("David Anderson", "Software Engineer") // Calling the function to add employee 3
addEmployeeCard("Olivia Martinez", "Marketing Specialist") // Calling the function to add employee 4
