// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
function minimunQuantity(inventory) {
  let minQuantity = inventory[0].quantity;
  let minName = inventory[0].name;

  for (let i=1; i < inventory.length; i++) {
    if (inventory[i].quantity < minQuantity) {
      minQuantity = inventory[i].quantity;
      minName = inventory[i].name;
    }
  }
  
  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minName} ซึ่งมี ${minQuantity} ชิ้น`;
}

console.log(minimunQuantity(inventory));

const inventory2 = [
  { name: "Apple", price: 35, quantity: 100 },
	{ name: "Banana", price: 10, quantity: 2000 },
	{ name: "Orange", price: 30, quantity: 60 },
];

console.log(minimunQuantity(inventory2));