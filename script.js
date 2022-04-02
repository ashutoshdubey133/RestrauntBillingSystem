var i =1;

function addItem(){
  if(i>6){
    return;
  }
  i++;
  const cartList = document.getElementById("cartList");
  const itembg = document.createElement("div");
  itembg.style.cssText = `
  background-color: #ffc4ff;
  margin-left: 1.2vw;
  margin-right: 1.2vw;
  width: 57.4vw;
  height: 8vh;
  margin-top: 1.6vh;
  border-radius: 3vh;
  `;

  cartList.appendChild(itembg);
}
