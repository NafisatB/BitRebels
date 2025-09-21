const inventory = []; //global Scope

const addProduct = (id, name, price, quantity) => {
    const product = {
    id: id,
    name: name,
    price: price,
    quantity: quantity,
    lowStock: quantity < 10
};

inventory.push (product);

};

const findProductById = (id) => {
    const product = inventory.find ((item) => item.find === id);
    if (product) {
      return product;
    }
    return "product does not exist";

    // for (let i= 0; i < inventory.length; i++){
    // if (inventory[i].id === id) {
    //     return inventory[i];
    // }
    // }
    // return "Product does not exist";
};

const removeProduct = (id) => {
const index = inventory.findIndex ((item) => item.find === id);
if (index === -1) {
return "Product not found";
}
let removeIndex = inventory.splice (index, 1);
return `${removeIndex[0].name} has been removed`;

};

// const updateStock = (id, update) => {
// const product = findProductById (id);
// if (!Product) {
//     return `product with name ${name} not found`;
// }

// product.quantity +=  update;
// product.lowStock = product.quantity < 10;
// return `updated ${product.name}, new quantity: ${product.quantity}`
// };

// const generateReport = () => {
// let totalValue = 0;
// let lowStockProduct = [];
// for (let product of inventory) {
//     totalValue += product.price * product.quantity;
//     if (product.lowStock) {
//         lowStockProduct.push(product.name);
//     }

//     return {
//         totalProduct: inventory.length,
//         totalValue: totalValue,
//         lowStockProduct: lowStockProduct
//     }
// }
// };

// console.log (addProduct(1, 'Dano milk', 10, 100));
// console.log (addProduct(2,"Mango juice", 15, 150));
// console.log (removeProduct(1));
// console.log (updateStock(2, 50));
// console.log (generateReport());

const updateStock = (id, change) => {
  const product = findProductById(id);
  if (!product) {
    return `Product with ID ${id} not found.`;
  }
  product.quantity += change;
  product.lowStock = product.quantity < 10;
  return `Updated ${product.name}, new quantity: ${product.quantity}`;
};
 
// Generate report
const generateReport = () => {
  let totalValue = 0;
  let report = "Inventory Report \n";
 
  inventory.forEach((product) => {
    const value = product.price * product.quantity;
    totalValue += value;
 
    report += `${product.name} (ID: ${product.id}) - ${product.quantity} in stock - Value: $${value}\n`;
 
    if (product.lowStock) {
      report += `Low stock: only ${product.quantity} left!\n`;
    }
  });
 
  report += `\nTotal Products: ${inventory.length}`;
  report += `\nTotal Value: $${totalValue}`;
  return report;
};
 
// --- Testing like your bank example ---
console.log(inventory.length, "before adding");
 
addProduct(1, "Laptop", 1200, 5);
addProduct(2, "Phone", 600, 15);
 
console.log(inventory.length, "after adding");
console.log(inventory, "DATABASE");
 
console.log(updateStock(1, 5));
console.log(removeProduct(2));
 
console.log(generateReport());
