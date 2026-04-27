function checkDiscount() {
  let age = document.getElementById('age').value;
  let isStudent = document.getElementById('isStudent').checked;
  if (age<18 || isStudent) {
    alert("Discount");
  }
  else
  {
    alert("Regular price");
  }
}