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