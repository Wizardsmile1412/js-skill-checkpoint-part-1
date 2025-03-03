// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products, promotionCode) {
  let totalAmt = 0;
  let result;
  for (let i=0; i < products.length; i++) {
    totalAmt = totalAmt + (products[i].price * products[i].quantity);
  }

  if (promotionCode === "SALE20") {
    result = totalAmt * (80/100);
  } else if (promotionCode === "SALE50") {
    result = totalAmt * (50/100);
  } else if (promotionCode === "") {
    result = totalAmt
  }
  return result;
}

console.log(calculateTotalPrice(products, promotionCode));
console.log(calculateTotalPrice(products, "SALE20"));
console.log(calculateTotalPrice(products, "SALE50"));