const p1 = "product_1.png";
const p1_1 = "product_1_1.png";
const p1_2 = "product_1_2.png";
const p1_3 = "product_1_3.png";
const p1_4 = "product_1_4.png";

const p2 = "product_2.png";
const p2_1 = "product_2_1.png";
const p2_2 = "product_2_2.png";
const p2_3 = "product_2_3.png";
const p2_4 = "product_2_4.png";

const p3 = "product_3.png";
const p3_1 = "product_3_1.png";
const p3_2 = "product_3_2.png";
const p3_3 = "product_3_3.png";
const p3_4 = "product_3_4.png";

const p4 = "product_4.png";
const p5 = "product_5.png";
const p6 = "product_6.png";
const p7 = "product_7.png";
const p8 = "product_8.png";
const p9 = "product_9.png";
const p10 = "product_10.png";
const p11 = "product_11.png";
const p12 = "product_12.png";
const p13 = "product_13.png";
const p14 = "product_14.png";
const p15 = "product_15.png";
const p16 = "product_16.png";
const p17 = "product_17.png";
const p18 = "product_18.png";
const p19 = "product_19.png";
const p20 = "product_20.png";
const p21 = "product_21.png";
const p22 = "product_22.png";
const p23 = "product_23.png";
const p24 = "product_24.png";
const p25 = "product_25.png";
const p26 = "product_26.png";
const p27 = "product_27.png";
const p28 = "product_28.png";
const p29 = "product_29.png";
const p30 = "product_30.png";
const p31 = "product_31.png";
const p32 = "product_32.png";
const p33 = "product_33.png";
const p34 = "product_34.png";
const p35 = "product_35.png";
const p36 = "product_36.png";

let products = [
  {
    id: 1,
    name: "ALL-IN-ONE CAST IRON GRILL",
    category: "grill-dine",
    image: p1,
    image_1: p1_1,
    image_2: p1_2,
    image_3: p1_3,
    image_4: p1_4,
    price: 199,
    discounted_price: 139.99,
    description:
      "Grill. Wok. Smoker. Skillet. Braiser. Roaster. Deep fryer. Slow cooker. Stock pot. The All-in-One Cast Iron Grill is an outdoor cook’s dream. A cast iron base and domed lid, grill grate, baking steel, tripod stand, and coal tray combine in countless configurations to expand your outdoor dining options. Done cooking? Pack it all down into a single self-contained bundle to minimize what you carry.",
  },
  {
    id: 2,
    name: "HORI HORI ULTIMATE",
    category: "tools",
    image: p2,
    image_1: p2_1,
    image_2: p2_2,
    image_3: p2_3,
    image_4: p2_4,
    price: 24.99,
    discounted_price: 19.99,
    description:
      "Originally designed to mimic the popular Japanese Garden Knife, hori hori roughly translates to “dig dig”. This hearty, multi-purpose tool is built for versatility. Pound in tent stakes with the flat pommel base. Measure planting depth with the handy inch marks. Saw a branch or whittle kindling with the rust-resistant doubled edge. Made for use in the backyard, camping, bush-crafting, or anywhere you need it.",
  },
  {
    id: 3,
    name: "JAPANESE NATA TOOL",
    category: "tools",
    image: p3,
    image_1: p3_1,
    image_2: p3_2,
    image_3: p3_3,
    image_4: p3_4,
    price: 69.99,
    discounted_price: 55.99,
    description:
      "Clear brush, strip bark, plank wood, make kindling–all with one thoughtfully-crafted tool. Inspired by a traditional Japanese implement and constructed with heritage-quality materials, our Japanese Nata Tool unites versatile function and refined durability. The stainless steel machete-like blade and a solid steel core that extends through the length of the hardwood handle lend stability and greater swinging weight yet it still packs thin and light, making it an essential addition to any collection.",
  },
  {
    id: 4,
    name: "2-TONE ULTIMATE DINING BUNDLE",
    category: "grill-dine",
    image: p4,
    price: 307.88,
    discounted_price: 292.48,
  },
  {
    id: 5,
    name: "TELESCOPING FIRE BLOWER",
    category: "grill-dine",
    image: p5,
    price: 19.99,
    discounted_price: 18.99,
  },
  {
    id: 6,
    name: 'COWBOY FIRE PIT GRILL - 30"',
    category: "grill-dine",
    image: p6,
    price: 699.99,
    discounted_price: 419.99,
  },
  {
    id: 7,
    name: "PIVOT ARC LIGHTER",
    category: "grill-dine",
    image: p7,
    price: 49.99,
    discounted_price: 47.49,
  },
  {
    id: 8,
    name: "PROVISIONS CORKSCREW KNIFE",
    category: "grill-dine",
    image: p8,
    price: 69.99,
    discounted_price: 41.99,
  },
  {
    id: 9,
    name: "CULINARY KNIFE 4-PIECE SET",
    category: "grill-dine",
    image: p9,
    price: 399.98,
    discounted_price: 239.98,
  },
  {
    id: 10,
    name: "OPEN FIRE GLOVE",
    category: "grill-dine",
    image: p10,
    price: 29.99,
    discounted_price: 23.99,
  },
  {
    id: 11,
    name: "CHEF GRILLING APRON",
    category: "grill-dine",
    image: p11,
    price: 39.99,
    discounted_price: 31.99,
  },
  {
    id: 12,
    name: "RAILROAD LANTERN",
    category: "lights-lanterns",
    image: p12,
    price: 99.99,
    discounted_price: 69.99,
  },
  {
    id: 13,
    name: "FOREST LANTERN",
    category: "lights-lanterns",
    image: p13,
    price: 79.99,
    discounted_price: 9.99,
  },
  {
    id: 14,
    name: "MINERS LANTERN",
    category: "lights-lanterns",
    image: p14,
    price: 79.99,
    discounted_price: 74.99,
  },
  {
    id: 15,
    name: "EDISON LIGHT STICK",
    category: "lights-lanterns",
    image: p15,
    price: 74.99,
    discounted_price: 59.99,
  },
  {
    id: 16,
    name: "BRASS LIGHT SET",
    category: "lights-lanterns",
    image: p16,
    price: 149.98,
    discounted_price: 119.98,
  },
  {
    id: 17,
    name: "",
    category: "lights-lanterns",
    image: p17,
    price: 79.99,
    discounted_price: 9.99,
  },
  {
    id: 18,
    name: "OUTPOST LANTERN",
    category: "lights-lanterns",
    image: p18,
    price: 69.99,
    discounted_price: 48.99,
  },
  {
    id: 19,
    name: "EDISON MINI LANTERN",
    category: "lights-lanterns",
    image: p19,
    price: 39.99,
    discounted_price: 31.99,
  },
  {
    id: 20,
    name: "BEACON HANGING LIGHT",
    category: "lights-lanterns",
    image: p20,
    price: 64.99,
    discounted_price: 45.49,
  },
  {
    id: 21,
    name: "JAPANESE NATA HATCHET",
    category: "tools",
    image: p21,
    price: 69.99,
    discounted_price: 55.99,
  },
  {
    id: 22,
    name: "FELLING AXE",
    category: "tools",
    image: p22,
    price: 109.99,
    discounted_price: 76.99,
  },
  {
    id: 23,
    name: "PULASKI AXE",
    category: "tools",
    image: p23,
    price: 179.99,
    discounted_price: 125.99,
  },
  {
    id: 24,
    name: "FIELD HATCHET",
    category: "tools",
    image: p24,
    price: 69.99,
    discounted_price: 55.99,
  },
  {
    id: 25,
    name: "NO.6 FIELD KNIFE",
    category: "tools",
    image: p25,
    price: 79.99,
    discounted_price: 55.99,
  },
  {
    id: 26,
    name: "TIMBER SAW",
    category: "tools",
    image: p26,
    price: 79.99,
    discounted_price: 55.99,
  },
  {
    id: 27,
    name: "HORI HORI CLASSIC",
    category: "tools",
    image: p27,
    price: 22,
    discounted_price: 17.6,
  },
  {
    id: 28,
    name: "NEELUM DUFFEL BAG",
    category: "store-carry",
    image: p28,
    price: 69.99,
    discounted_price: 55.99,
  },
  {
    id: 29,
    name: "NEELUM DOPP KIT",
    category: "store-carry",
    image: p29,
    price: 29.99,
    discounted_price: 28.49,
  },
  {
    id: 30,
    name: "NEELUM TOTE BAGS",
    category: "store-carry",
    image: p30,
    price: 44.99,
    discounted_price: 42.74,
  },
  {
    id: 31,
    name: "NEELUM ZIPPER POUCHES",
    category: "store-carry",
    image: p31,
    price: 19.99,
    discounted_price: 15.99,
  },
  {
    id: 32,
    name: "HARVESTING & GATHERING BAG",
    category: "store-carry",
    image: p32,
    price: 79.99,
    discounted_price: 55.99,
  },
  {
    id: 33,
    name: "FIRE PIT GRILL GRATE CARRY BAG",
    category: "store-carry",
    image: p33,
    price: 24.99,
    discounted_price: 23.74,
  },
  {
    id: 34,
    name: "COWBOY GRILL CHARCOAL TRAY CARRY BAG",
    category: "store-carry",
    image: p34,
    price: 29.99,
    discounted_price: 28.49,
  },
  {
    id: 35,
    name: "HEAVY DUTY GRILL GRATE CARRY BAG",
    category: "store-carry",
    image: p35,
    price: 29.99,
    discounted_price: 28.49,
  },
  {
    id: 36,
    name: "COWBOY GRILL COVER",
    category: "store-carry",
    image: p36,
    price: 34.99,
    discounted_price: 33.24,
  },
];

export default products;
