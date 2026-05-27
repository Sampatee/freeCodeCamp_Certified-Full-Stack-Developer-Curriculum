const parseShipment = (rawData) => {
  const items = [];

  for (const item of rawData) {
    const props = item.split("|");
    const duplicate = items.some((i) => i.sku === props[0]);

    if (!duplicate) {
      items.push({
        sku: props[0],
        name: props[1],
        qty: Number(props[2]),
        expires: props[3],
        zone: props[4] || "general",
      });
    }
  }

  return items;
};

const planRestock = (pantry, shipment) => {
  const actions = [];

  for (let i = 0; i < shipment.length; i++) {
    let type = "";
    const existsInPantry = pantry.some((item) => item.sku === shipment[i].sku);

    if (shipment[i].qty <= 0) {
      type = "discard";
    } else if (existsInPantry) {
      type = "restock";
    } else {
      type = "donate";
    }

    actions.push({ type, item: shipment[i] });
  }

  return actions;
};

const groupByZone = (actions) => {
  const zones = {};

  for (const action of actions) {
    const zone = action.item.zone;

    if (!zones[zone]) {
      zones[zone] = [];
    }

    zones[zone].push(action);
  }

  return zones;
};

const clonePantry = (pantry) => {
  const deepCopy = [];

  for (let i = 0; i < pantry.length; i++) {
    deepCopy.push({ ...pantry[i] });
  }

  return deepCopy;
};

const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
];
const rawData = ["A10|Tomatoes|5|2027-01-01|fridge"];

const shipment = parseShipment(rawData);
const pantryClone = clonePantry(pantry);
const actions = planRestock(pantryClone, shipment);
const grouped = groupByZone(actions);

console.log(grouped);
