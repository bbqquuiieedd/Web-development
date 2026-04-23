function processFormData() {
    /* При отправке формы страница не перезагружается */
    event.preventDefault()
    // Access the form
    let form = document.getElementById('myForm');
    
    // Access the elements by name and get values
    let city = form.elements.city.value;
    let country = form.elements.country.value;
    
    // insertData function is called here. values of city and country are passed to it
    insertData(city, country);
    
    document.getElementById('city').value = '';
    document.getElementById('country').value = '';
}

// definition of hidden function
function insertData(city, country) {
  let table = document.getElementById('dataTable');
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = city;
  cell2.innerHTML = country;
}