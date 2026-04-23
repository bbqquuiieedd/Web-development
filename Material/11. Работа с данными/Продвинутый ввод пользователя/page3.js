function processFormData() {
    /* При отправке формы страница не перезагружается */
    event.preventDefault()

    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;
    let isSubscribed = document.getElementById('subscribe').checked;
    
    //Insert data into table with predefined function
    insertdata(email, password, isSubscribed);
    
    // Clear the form fields
    document.getElementById('email').value = '';
    document.getElementById('pass').value = '';
};

function insertdata(email, password, isSubscribed) {
  // Get a reference to the table
  let table = document.getElementById('dataTable');
  
  // Create a new row at the last position of the table
  let row = table.insertRow(-1);
  
  // Insert new cells
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  
  // Add the data to the new cells
  cell1.innerHTML = email;
  cell2.innerHTML = password;
  cell3.innerHTML = isSubscribed;
}