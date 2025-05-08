const items = [
  { name: "Notebook", description: "A 200-page ruled notebook" },
  { name: "Pen", description: "Blue ink ballpoint pen" },
  { name: "Backpack", description: "Water-resistant 20L backpack" },
  { name: "Headphones", description: "Noise-cancelling over-ear headphones" },
  {
    name: "Smartphone",
    description: "Latest Android smartphone with AMOLED display",
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with 10 hours of playtime",
  },
  {
    name: "Smart Thermostat",
    description: "Wi-Fi enabled smart thermostat for home automation",
  },
  {
    name: "Air Purifier",
    description: "HEPA filter air purifier for cleaner air in rooms",
  },
  {
    name: "Projector",
    description: "Mini projector with 1080p resolution and HDMI input",
  },
  {
    name: "VR Headset",
    description:
      "Virtual reality headset compatible with PC and mobile devices",
  },
  {
    name: "Fitness Band",
    description: "Water-resistant fitness tracker with sleep tracking",
  },
  {
    name: "Electric Kettle",
    description: "1.7L electric kettle with temperature control",
  },
  {
    name: "Instant Camera",
    description: "Instant camera with polaroid film and built-in flash",
  },
  {
    name: "Smart Light Bulb",
    description: "Wi-Fi enabled smart LED bulb with color-changing features",
  },
  {
    name: "Coffee Maker",
    description: "12-cup programmable coffee maker with auto-shutoff",
  },
  {
    name: "Blender",
    description: "High-power blender with multiple speed settings",
  },
  {
    name: "Microwave Oven",
    description: "700W microwave oven with auto-cook features",
  },
  {
    name: "Digital Scale",
    description: "Bathroom scale with body fat percentage tracking",
  },
  {
    name: "Electric Grill",
    description: "Indoor electric grill with non-stick surface",
  },
  {
    name: "Smart Plug",
    description: "Wi-Fi smart plug to control devices remotely",
  },
  {
    name: "Robot Vacuum",
    description: "Self-charging robot vacuum with mapping technology",
  },
  {
    name: "Digital Camera",
    description: "Compact digital camera with 20MP and Wi-Fi connectivity",
  },
  {
    name: "Electric Toothbrush",
    description:
      "Rechargeable electric toothbrush with multiple cleaning modes",
  },
  {
    name: "Smart Lock",
    description: "Keyless smart lock with fingerprint and smartphone access",
  },
  {
    name: "Electric Shaver",
    description: "Cordless electric shaver with precision trimmer",
  },
  {
    name: "Hair Dryer",
    description: "Professional blow dryer with ceramic heating",
  },
  {
    name: "Stand Mixer",
    description: "10-speed stand mixer with dough hook and whisk attachment",
  },
  {
    name: "Water Filter",
    description: "3-stage filtration water filter pitcher",
  },
  {
    name: "Bread Maker",
    description: "Automatic bread maker with multiple program settings",
  },
  {
    name: "Nespresso Machine",
    description: "Single-serve espresso machine with milk frother",
  },
  {
    name: "Coffee Grinder",
    description: "Electric coffee grinder with multiple grind settings",
  },
  {
    name: "Toaster",
    description: "4-slice toaster with browning control and defrost function",
  },
  {
    name: "Dishwasher",
    description: "Compact dishwasher with 6 wash cycles and energy-saving mode",
  },
  {
    name: "Coffeemaker",
    description: "Single-serve drip coffeemaker with reusable filter",
  },
  {
    name: "Soda Stream",
    description: "Home soda maker for sparkling water and drinks",
  },
  {
    name: "Electric Oven",
    description: "Compact electric oven with convection and baking functions",
  },
  {
    name: "Waterproof Speaker",
    description: "Portable waterproof Bluetooth speaker with bass boost",
  },
  {
    name: "Soundbar",
    description: "2.1-channel soundbar with subwoofer for enhanced audio",
  },
  {
    name: "Streaming Device",
    description: "4K streaming device with voice control and apps",
  },
  {
    name: "WIFI Router",
    description: "Dual-band Wi-Fi router with 6 antennae for strong signal",
  },
  {
    name: "Surge Protector",
    description: "Power strip surge protector with 8 outlets",
  },
  {
    name: "Gaming Console",
    description: "Next-gen gaming console with 4K resolution and game library",
  },
  {
    name: "Laptop Stand",
    description: "Adjustable ergonomic laptop stand with cooling pad",
  },
  {
    name: "Tablet",
    description: "10-inch tablet with HD display and 32GB storage",
  },
  {
    name: "Wireless Charger",
    description: "Qi wireless charging pad for smartphones and accessories",
  },
  {
    name: "Portable Fan",
    description: "Rechargeable mini portable fan with adjustable speed",
  },
  {
    name: "Air Conditioner",
    description: "Portable air conditioner with dehumidifier and cooling modes",
  },
  {
    name: "Car Vacuum",
    description: "Cordless hand vacuum with powerful suction for car cleaning",
  },
  {
    name: "Ice Cream Maker",
    description: "Automatic ice cream maker with self-freezing function",
  },
  {
    name: "Food Processor",
    description:
      "Multi-function food processor with slicing and dicing attachments",
  },
  {
    name: "E-Scooter",
    description: "Electric scooter with 15-mile range and foldable design",
  },
  {
    name: "Electric Bike",
    description: "Electric bicycle with 6-speed gears and 40-mile range",
  },
  {
    name: "Camping Stove",
    description: "Portable camping stove with windproof design",
  },
  {
    name: "Tent",
    description: "4-person tent with waterproof design and ventilation windows",
  },
  {
    name: "Sleeping Bag",
    description: "Winter sleeping bag with thermal insulation for cold weather",
  },
  {
    name: "Camping Chair",
    description: "Foldable camping chair with cupholder and carrying case",
  },
  {
    name: "Portable Grill",
    description: "Compact portable grill with foldable legs for easy transport",
  },
  {
    name: "Flashlight",
    description:
      "Rechargeable LED flashlight with multiple brightness settings",
  },
  {
    name: "Hiking Backpack",
    description: "Durable 30L hiking backpack with multiple compartments",
  },
  {
    name: "Hiking Boots",
    description: "Waterproof hiking boots with ankle support",
  },
  {
    name: "Camping Lantern",
    description: "Battery-powered camping lantern with adjustable brightness",
  },
  {
    name: "Thermal Flask",
    description: "Double-walled thermal flask for hot or cold beverages",
  },
  {
    name: "Trekking Poles",
    description: "Adjustable trekking poles for stability on rough terrain",
  },
  {
    name: "Binoculars",
    description: "8x42 binoculars with waterproof and fog-resistant design",
  },
  {
    name: "Camera Bag",
    description: "Padded camera bag with adjustable dividers",
  },
  {
    name: "Tripod",
    description: "Lightweight tripod with quick-release plate",
  },
  {
    name: "Drone",
    description: "Quadcopter drone with 4K camera and 30-minute flight time",
  },
  {
    name: "Action Camera",
    description: "Waterproof action camera with 4K recording and stabilization",
  },
  {
    name: "Car Mount",
    description: "Phone holder car mount with adjustable angle",
  },
  {
    name: "Car Charger",
    description: "Dual USB car charger for fast charging devices",
  },
  {
    name: "Bluetooth Earbuds",
    description: "True wireless earbuds with noise-cancelling technology",
  },
  {
    name: "Smart Mirror",
    description: "Interactive mirror with display for weather and news updates",
  },
  {
    name: "Electric Fan",
    description: "Energy-efficient tower fan with oscillation feature",
  },
  {
    name: "Smartphone Case",
    description: "Durable phone case with shockproof and waterproof features",
  },
  {
    name: "Laptop Sleeve",
    description: "Slim laptop sleeve with water-resistant fabric",
  },
  {
    name: "Smartphone Holder",
    description: "Adjustable smartphone holder for hands-free use",
  },
  {
    name: "Camera Lens",
    description: "50mm prime lens for DSLR with f/1.8 aperture",
  },
  {
    name: "External Hard Drive",
    description: "Portable 1TB external hard drive with USB 3.0",
  },
  {
    name: "Portable Power Bank",
    description: "10,000mAh portable power bank with fast charging",
  },
  {
    name: "Laptop Charger",
    description: "Replacement charger for 15-inch MacBook Pro",
  },
  {
    name: "Laptop Bag",
    description: "Business laptop bag with padded compartments for tech",
  },
  { name: "SD Card", description: "64GB SD card for high-speed storage" },
  {
    name: "USB Flash Drive",
    description: "128GB USB flash drive with USB 3.0 speed",
  },
  { name: "Monitor", description: "27-inch 4K monitor with adjustable stand" },
  {
    name: "Keyboard Cover",
    description: "Silicone keyboard cover for MacBook with transparent design",
  },
];

console.log(items);
console.log(items[10].description);

// convert to JSON
const itemsJson = JSON.stringify(items);
console.log(itemsJson);

// 2. Access object properties
console.log("Accessing 'name' of first item:", items[0].name);

// 3. Update a property
items[0].description = "A 250-page ruled notebook";
console.log("Updated description of first item:", items[0].description);

// 4. Add a new property
items[0].price = 2.5;
console.log("Added price to first item:", items[0]);

// 5. Delete a property
delete items[0].price;
console.log("Deleted price from first item:", items[0]);

// 6. Loop through properties of an object using for...in
console.log("Looping through properties of first item:");
for (let key in items[0]) {
  console.log(`${key}: ${items[0][key]}`);
}

// 7. Find a specific object by property value
const foundItem = items.find((item) => item.name === "Pen");
console.log("Found item with name 'Pen':", foundItem);

// 8. Filter items based on a condition
const smartItems = items.filter((item) =>
  item.name.toLowerCase().includes("smart")
);
console.log("Filtered items with 'smart' in name:", smartItems);

// 9. Sort the items alphabetically by name
items.sort((a, b) => a.name.localeCompare(b.name));
console.log("Items sorted by name:", items);

// 10. Get object keys, values, and entries
const sampleItem = items[0];
console.log("Keys of first item:", Object.keys(sampleItem));
console.log("Values of first item:", Object.values(sampleItem));
console.log("Entries of first item:", Object.entries(sampleItem));

// 11. Use .map() to transform each item into a summary string
const itemSummaries = items.map((item) => `${item.name}: ${item.description}`);
console.log("Item summaries using .map():", itemSummaries);
