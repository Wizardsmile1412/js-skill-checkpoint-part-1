// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;
// console.log(inventory[0])
inventory[2] = {name: "Orange", price: 20, quantity: 300};
// console.log(inventory)
let totalAmt = 0;
for (let i=0; i<inventory.length; i++) {
  totalAmt += (inventory[i].price*inventory[i].quantity);
}

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalAmt} บาท`)