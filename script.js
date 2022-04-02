function addItem(){
  const cartList = document.getElementById("cartList");
  const itembg = document.createElement("div");
  itembg.style.cssText = `
  background-color: #ffc4ff;
  width: 58vw;
  height: 8vh;
  margin-left: 1vw;
  margin-top: 2vh;
  margin-right: 7vw;
  border-radius: 3vh;
  `;

  cartList.appendChild(itembg);
}
