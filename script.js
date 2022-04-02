var i =1;
var price = [];
price["dosa"] = 100;
price["cholebhature"] = 60;

var total = 0;

function addItem(){
  if(i>6){
    return;
  }
  i++;

  const ioptions = document.getElementById("iname");
  const iname = ioptions.value;
  const iprice = price[iname];
  total += iprice;
  const cartList = document.getElementById("cartList");

  const itembg = document.createElement("div");
  itembg.style.cssText = `
  background-color: #ffc4ff;
  margin-left: 1.2vw;
  margin-right: 1.2vw;
  width: 57vw;
  height: 8vh;
  margin-top: 1.6vh;
  border-radius: 3vh;
  color: black;
  font-size: 1em;
  padding-top: 1vh;
  font-family: "Georgia";
  font-weight: bold;
  `;
  const para = document.createElement("p");
  const ptext = document.createTextNode(iname.toUpperCase() +" "+iprice);
  para.appendChild(ptext);
  itembg.appendChild(para);

  cartList.appendChild(itembg);

  const totaldiv = document.getElementById("totalh2");

  totaldiv.innerHTML = "TOTAL AMOUNT: " + total.toString();

}
