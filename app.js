let shopingCart = [];
let items = [
  {
    name: "paine",
    price: 120,
  },
  {
    name: "apa",
    price: 200,
  },
  {
    name: "branza",
    price: 130,
  },
  {
    name: "carne",
    price: 260,
  },
];
const putItemIntoShoppingCart = (item) => {
  shopingCart.push(item);
  sumToPay(shopingCart);
  return shopingCart;
};

const removeItemFromShoppingCart = (itemName) => {
  let findedItem = shopingCart.find((el) => el.name === itemName);
  shopingCart.splice(
    shopingCart.findIndex((obj) => {
      return obj.name === itemName;
    }),
    1
  );
};

const sumToPay = (shopingCart) => {
  return `Total to pay: ${shopingCart.reduce(
    (acc, item) => acc + item.price,
    0
  )}`;
};

const displayItem = (arg, id) => {
  const newTable = document.createElement("table");
  newTable.innerHTML = `<thead><th>${id}</th><th>Price</th></thead>`;
  for (player of arg) {
    const newRow = document.createElement("tr");
    const tdPlayer = document.createElement("td");
    const tdScore = document.createElement("td");
    tdPlayer.textContent = player.name;
    tdScore.textContent = player.price;
    newRow.appendChild(tdPlayer);
    newRow.appendChild(tdScore);
    newTable.appendChild(newRow);
  }

  const target = document.getElementById(id);
  target.appendChild(newTable);
};

// putItemIntoShoppingCart(items.find((el) => el.name === "paine"));
// putItemIntoShoppingCart(items.find((el) => el.name === "branza"));
// putItemIntoShoppingCart(items.find((el) => el.name === "carne"));
// putItemIntoShoppingCart(items.find((el) => el.name === "apa"));
// putItemIntoShoppingCart(items.find((el) => el.name === "carne"));
// removeItemFromShoppingCart("carne");
// removeItemFromShoppingCart("carne");
// removeItemFromShoppingCart("apa");

displayItem(items, "items");
displayItem(shopingCart, "shopingCart");

document.getElementById("sumToPay").innerText = sumToPay(shopingCart);
