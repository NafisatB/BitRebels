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