var arr = document.getElementsByTagName('button');

window.onload = function() {
  for(var i = 0; i < arr.length; i++) {
    let btn = arr[i].id;
    arr[i].onclick = function() {
      addToCart(btn);
    }
  }
}

function add(price, name) {
  let cart = "";
  if("cart" in sessionStorage)
    cart = sessionStorage.getItem("cart");
  cart += " Price: " + price + " Name: " + name;
  sessionStorage.setItem("cart", cart);
}


//u have to copy this multimultimegamulti times
function addToCart(id) {
  if(id == "wheat"){
    let price = 7.25;
    add(price, id);
  }
  if(id == "white"){
    let price = 4.50;
    add(price, id);
  }
  if(id == "whitetor"){
    let price = 7.50;
    add(price, id);
  }
  if(id == "wheattor"){
    let price = 9.50;
    add(price, id);
  }
  if(id == "wheatp"){
    let price = 9.95;
    add(price, id);
  }
  if(id == "ravioli"){
    let price = 14.50;
    add(price, id);
  }
  if(id == "egg"){
    let price = 8.85;
    add(price, id);
  }
  if(id == "spag"){
    let price = 4.75;
    add(price, id);
  }
  if(id == "tort"){
    let price = 21.75;
    add(price, id);
  }
  if(id == "glu"){
    let price = 19.95;
    add(price, id);
  }
}
