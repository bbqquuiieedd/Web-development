function processFormData() {
  let form = document.getElementById('myForm');

  let cardNumber = form.elements.number.value;
  let holder = form.elements.holder.value;
  let method = form.elements.pay.value;

  // Insert data into table with predefined function
  insertdata(cardNumber, holder, method);

  // Clear the form fields
  clearFormData();
}

function insertdata(cardNumber, holder, method) {
  // Get the table by its ID
  let table = document.getElementById('dataTable');
  
  // Create a new row at the end of the table
  let newRow = table.insertRow();
  
  // Insert new cells for each data field
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  
  // Add the data to the cells
  cell1.textContent = cardNumber;
  cell2.textContent = holder;
  cell3.textContent = method;
}

function clearFormData() {
  // Clear the form fields
  document.getElementById('myForm').reset();
}