function calculate(){
  let x = document.getElementById("price");
  let isOver18 = confirm("Press OK if under 18");
  
  if (isOver18 === true) {
    x.textContent = "Discount: 10$";
  }
  else {
    x.textContent = "Regular price: 50$";
  }
}