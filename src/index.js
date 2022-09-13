function amountBTC(event) {
  event.preventDefault();
  let priceBitcoin = document.querySelector("#input-price").value;
  console.log(priceBitcoin);
  let amount = document.querySelector("#input-amount").value;
  console.log(amount);
  let result = document.querySelector("#amount-btc");
  let amountBTC = (amount / priceBitcoin).toFixed(7);
  console.log(amountBTC);

  result.innerHTML = amountBTC;
}

function removeAll(event) {
  event.preventDefault();
  let priceBitcoin = document.querySelector("#input-price");
  let amount = document.querySelector("#input-amount");

  priceBitcoin.innerHTML = null;
  amount.innerHTML = null;
}

let formCalculate = document.querySelector("#calculate");
formCalculate.addEventListener("click", amountBTC);

let formRemove = document.querySelector("#remove");
formRemove.addEventListener("submit", removeAll);
