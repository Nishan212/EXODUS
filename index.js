var inputItem = document.getElementById("search");

inputItem.addEventListener("keyup", filterEvent);

function filterEvent(e) {
  var text = e.target.value.toLowerCase();
  var items = document.getElementsByClassName("card-body");

  Array.from(items).forEach((item) => {
    var roomName = item.firstElementChild.textContent;
    if (roomName.toLowerCase().indexOf(text) != -1) {
      item.parentElement.style.display = "block";
    } else {
      item.parentElement.style.display = "none";
    }
  });
}

var buttons = document.getElementsByClassName("book");
Array.from(buttons).forEach((button) => {
  if (button.id != "checkin") {
    button.addEventListener("click", clickEvent);
  }
});

function clickEvent(e) {
  var guests = document.getElementById("guest" + e.target.id[4]).value;
  var days = document.getElementById("day" + e.target.id[4]).firstElementChild
    .value;
  var price = document
    .getElementById("price" + e.target.id[4])
    .textContent.split("₹")[1];

  days = days == "" ? "--" : days;
  var totalCost = days == "--" ? "--" : "₹" + days * parseInt(price);

  document.getElementById("receipt-guests").textContent = guests;
  document.getElementById("receipt-days").textContent = days;
  document.getElementById("receipt-total").textContent = totalCost;
}