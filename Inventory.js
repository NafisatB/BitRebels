const removeProduct = (id) => {
const index = inventory.findIndex ((item) => item.find === id);
if (index === -1) {
return "Product not found";
}
let removeIndex = inventory.splice (index, 1);
return `${removeIndex[0].name} has been removed`;
 
};