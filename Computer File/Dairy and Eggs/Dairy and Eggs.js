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
  if(id == "wegg"){
    let price = 13.95;
    add(price, id);
  }
  if(id == "qegg"){
    let price = 24.65;
    add(price, id);
  }
  if(id == "begg"){
    let price = 11.95;
    add(price, id);
  }
  if(id == "butter"){
    let price = 17.95;
    add(price, id);
  }
  if(id == "cream"){
    let price = 6.45;
    add(price, id);
  }
  if(id == "wholemilk"){
    let price = 6.90;
    add(price, id);
  }
  if(id == "fatmilk"){
    let price = 5.25;
    add(price, id);
  }
  if(id == "fatfree"){
    let price = 4.95;
    add(price, id);
  }
  if(id == "almilk"){
    let price = 24.95;
    add(price, id);
  }
  if(id == "comilk"){
    let price = 24.95;
    add(price, id);
  }
  if(id == "chomilk"){
    let price = 22.95;
    add(price, id);
  }
  if(id == "banana"){
    let price = 9.00;
    add(price, id);
  }
  if(id == "gyog"){
    let price = 8.95;
    add(price, id);
  }
  if(id == "vayo"){
    let price = 22.25;
    add(price, id);
  }
  if(id == "fyo"){
    let price = 7.30;
    add(price, id);
  }
  if(id == "moza"){
    let price = 12.45;
    add(price, id);
  }
  if(id == "feta"){
    let price = 20.90;
    add(price, id);
  }
  if(id == "cheda"){
    let price = 25.90;
    add(price, id);
  }
  if(id == "blchee"){
    let price = 32.75;
    add(price, id);
  }
  if(id == "cachee"){
    let price = 25.99;
    add(price, id);
  }
  if(id == "bber"){
    let price = 3.75;
    add(price, id);
  }
  if(id == "sb"){
    let price = 3.75;
    add(price, id);
  }
  if(id == "ber"){
    let price = 3.75;
    add(price, id);
  }
  if(id == "apr"){
    let price = 3.75;
    add(price, id);
  }
  if(id == "hba"){
    let price = 3.75;
    add(price, id);
  }
}
