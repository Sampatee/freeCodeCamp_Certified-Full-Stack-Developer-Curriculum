const inventory = [];

const findProductIndex = (productName) => {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName.toLowerCase()) {
      return i;
    }
  }

  return -1;
};

const addProduct = ({ name, quantity }) => {
  const productName = name.toLowerCase();
  const productindex = findProductIndex(productName);
  const inventoryProduct = inventory[productindex];

  if (inventoryProduct) {
    inventoryProduct.quantity += quantity;
    console.log(`${inventoryProduct.name} quantity updated`);
    return;
  }

  inventory.push({ name: productName, quantity });
  console.log(`${productName} added to inventory`);
};

const removeProduct = (name, quantity) => {
  const productName = name.toLowerCase();
  const productIndex = findProductIndex(productName);
  const inventoryProduct = inventory[productIndex];

  if (productIndex === -1) {
    console.log(`${productName} not found`);
    return;
  }

  switch (true) {
    case inventoryProduct.quantity >= quantity:
      inventoryProduct.quantity -= quantity;
      console.log(
        `Remaining ${inventoryProduct.name} pieces: ${inventoryProduct.quantity}`
      );
      break;
    case inventoryProduct.quantity < quantity:
      console.log(
        `Not enough ${inventoryProduct.name} available, remaining pieces: ${inventoryProduct.quantity}`
      );
      break;
  }

  if (inventoryProduct.quantity === 0) {
    inventory.splice(productIndex, 1);
  }
};
