console.log(inventory.length, "before adding");
 
addProduct(1, "Laptop", 1200, 5);
addProduct(2, "Phone", 600, 15);
addProduct(3, "Milk", 700, 10);
addProduct(4, "Charger", 950, 4);
addProduct(5, "Tape", 60, 7);
 
console.log(inventory.length, "after adding");
console.log(inventory, "DATABASE");
 
console.log(updateStock(1, 5));
console.log(removeProduct(2));
 
console.log(generateReport());

const removeProduct = (id) => {
const index = inventory.findIndex ((item) => item.find === id);
if (index === -1) {
return "Product not found";
}
let removeIndex = inventory.splice (index, 1);
return `${removeIndex[0].name} has been removed`;
 
};

