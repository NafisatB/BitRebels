// Global inventory array (like bankAccounts in your example)
const inventory = [];
 
// Add product function
const addProduct = (id, name, price, quantity) => {
  const product = {
    id: id,
    name: name,
    price: price,
    quantity: quantity,
    lowStock: quantity < 10
  };
  inventory.push(product);
};
// Find product by ID (similar to findAccountByName)
const findProductById = (id) => {
  const product = inventory.find((item) => item.id === id);
  return product;
};
 
// Remove product
const removeProduct = (id) => {
  const index = inventory.findIndex((item) => item.id === id);
  if (index === -1) {
    return `Product with ID ${id} not found`;
  }
  const removed = inventory.splice(index, 1);
  return `Removed ${removed[0].name}`;
};
 
// Update stock
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
