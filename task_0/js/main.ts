// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two Student objects
  const student1: Student = {
    firstName: "Ama",
    lastName: "Mensah",
    age: 20,
    location: "Accra",
  };
  
  const student2: Student = {
    firstName: "Kofi",
    lastName: "Boateng",
    age: 22,
    location: "Kumasi",
  };
  
  // Create an array containing the two students
  const studentsList: Student[] = [student1, student2];
  
  // Create a table element
  const table = document.createElement("table");
  table.border = "1"; // add border for visibility
  
  // Create table header row
  const headerRow = document.createElement("tr");
  const nameHeader = document.createElement("th");
  nameHeader.textContent = "First Name";
  const locationHeader = document.createElement("th");
  locationHeader.textContent = "Location";
  
  // Append headers to the header row
  headerRow.appendChild(nameHeader);
  headerRow.appendChild(locationHeader);
  
  // Append header row to the table
  table.appendChild(headerRow);
  
  // Loop through the studentsList array
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
  
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
  
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
  
    // Append cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
  
    // Append the row to the table
    table.appendChild(row);
  });
  
  // Append the table to the body of the document
  document.body.appendChild(table);
  