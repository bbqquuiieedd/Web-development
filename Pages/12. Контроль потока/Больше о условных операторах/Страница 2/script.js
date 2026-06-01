function calculate(){
  let product = document.getElementById('product').value;
  let insurance = document.getElementById('insurance').checked;
  let quantity = Number(document.getElementById('quantity').value);

  let total = product * quantity + (insurance && 10);

  let shipping = "";
  if (total > 400) {
    shipping = "Free";
  }
  else if (total > 100) {
    shipping = "Discounted";
  }
  else {
    shipping = "Standard";
  }
  let ship = document.getElementById("shipping");
  ship.textContent = ship.textContent + shipping;
}