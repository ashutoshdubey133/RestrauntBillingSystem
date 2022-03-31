function addItem(){
  const cartList = document.getElementById("cartList");
  const para = document.createElement("p");

  const node = document.createTextNode("Hello from js");

  para.appendChild(node);
  cartList.appendChild(para);
}
