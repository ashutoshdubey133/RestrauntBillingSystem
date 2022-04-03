var price = [];
price["dosa"] = 100;
price["cholebhature"] = 60;

var quantity = [];
quantity["dosa"] = 0;
quantity["cholebhature"] = 0;

var total = 0;

function cartAdder(){

  const ioptions = document.getElementById("iname");
  const iname = ioptions.value;
  const iprice = price[iname];
  const iquantity = document.getElementById("iquantity").value;
  total += iprice * iquantity;

  if(quantity[iname] == 0){
    addItem(iname,iprice,iquantity);
  }else{
    updateItem(iname,iprice,iquantity);
  }

  const totaldiv = document.getElementById("totalh2");
  totaldiv.innerHTML = "TOTAL AMOUNT: " + total.toString();

}

function addItem(iname,iprice,iquantity){
  quantity[iname] += Number(iquantity);
  const cartList = document.getElementById("cartList");
  const itembg = document.createElement("div");
  itembg.style.cssText = `
  background-color: #ffc4ff;
  margin-left: 1.2vw;
  margin-right: 1.2vw;
  width: 55vw;
  height: 10vh;
  margin-top: 1.6vh;
  border-radius: 3vh;
  color: black;
  font-size: 1em;
  padding-top: 1vh;
  font-family: "Georgia";
  font-weight: bold;
  box-shadow: 6px 6px 2px #e1bee7;
  margin-bottom: 1.6vh;
  display: grid;
  grid-template-columns: 70% 30%;
  `;
  const para = document.createElement("p");
  para.setAttribute("id",iname);
  const ptext = document.createTextNode(iname.toUpperCase() +" "+iprice + " " + "Quantity: " + quantity[iname]);
  para.appendChild(ptext);
  itembg.appendChild(para);
  const delbutton = document.createElement("button");
  delbutton.setAttribute("type","button");
  const deleteIcon = document.createElement("img");
  deleteIcon.setAttribute("src","https://img.icons8.com/color/48/000000/filled-trash.png");
  delbutton.style.cssText = `
  margin-right: 3vw;
  height: 8vh;
  border-radius: 9%;
  `;
  delbutton.appendChild(deleteIcon);
  itembg.appendChild(delbutton);
  cartList.appendChild(itembg);
}

function updateItem(iname,iprice,iquantity){
  quantity[iname] += Number(iquantity);
  const citem = document.getElementById(iname);
  citem.innerHTML = iname.toUpperCase() +" "+iprice + " " + "Quantity: " +quantity[iname];
}
