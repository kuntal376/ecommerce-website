import React from "react";
import FLITE_Women_Slippers from "../images/FLITE-Women-Slippers.webp";
import Vokline_Women_sports_shoes from "../images/Vokline-Women-sports-shoes.webp";
import Vokline_Women_sports_shoes2 from "../images/Vokline-Women-sports-shoes2.webp";
import Vokline_Women_sports_shoes3 from "../images/Vokline-Women-sports-shoes3.webp";
import Hitway_Boots_Women from "../images/Hitway-Boots-Women.webp";
import Walkaroo_Women_Casual_Sandal from "../images/Walkaroo-Women-Casual-Sandal.webp";
import Walkaroo_Women_Casual_Sandal2 from "../images/Walkaroo-Women-Casual-Sandal2.webp";
import Walkaroo_Women_Casual_Sandal3 from "../images/Walkaroo-Women-Casual-Sandal3.webp";
import TRYME_Women_Heels from "../images/TRYME-Women-Heels.webp";
import Zaptoz_Casual_Sneaker_Women from "../images/Zaptoz-Stylish-Casual-Comfort-Sneaker-Women.webp";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    brand: "FLITE",
    name: "FLITE Women Slipper",
    price: 259,
    images: [FLITE_Women_Slippers],
    type: "Slipper",
    material: "Rubber",
    occasion: "Casual"
  },
  {
    id: 2,
    brand: "Vokline",
    name: "Vokline Women Sports Shoes",
    price: 259,
    images: [Vokline_Women_sports_shoes, Vokline_Women_sports_shoes2, Vokline_Women_sports_shoes3],
    type: "Running Shoes",
    material: "Polyester",
    occasion: "Sports"
  },
  {
    id: 3,
    brand: "Hitway",
    name: "Hitway Boots For Women",
    price: 259,
    images: [Hitway_Boots_Women],
    type: "Boots",
    material: "Leather",
    occasion: "Party"
  },
  {
    id: 4,
    brand: "Walkaroo",
    name: "Walkaroo Casual Women Sandal",
    price: 259,
    images: [Walkaroo_Women_Casual_Sandal, Walkaroo_Women_Casual_Sandal2, Walkaroo_Women_Casual_Sandal3],
    type: "Sandal",
    material: "Rubber",
    occasion: "Casual"
  },
  {
    id: 5,
    brand: "TRYME",
    name: "TRYME Women Heels",
    price: 259,
    images: [TRYME_Women_Heels],
    type: "Heels",
    material: "Leather",
    occasion: "Party"
  },
  {
    id: 6,
    brand: "Zaptoz",
    name: "Zaptoz Women Sneakers",
    price: 259,
    images: [Zaptoz_Casual_Sneaker_Women],
    type: "Sneakers",
    material: "Canvas",
    occasion: "Party"
  },
];

const WomenFootwearProducts = ({ filters }) => {
  const filteredProducts = products.filter((product) => {

    const typeMatch = filters.type.length === 0 || filters.type.includes(product.type);
    const materialMatch = filters.material.length === 0 || filters.material.includes(product.material);
    const brandMatch = filters.brand.length === 0 || filters.brand.includes(product.brand);
    const occasionMatch = filters.occasion.length === 0 || filters.occasion.includes(product.occasion);
    const priceMatch = !filters.price || product.price <= filters.price;

    return (
      typeMatch && materialMatch && brandMatch && priceMatch && occasionMatch
    );
  })

  .sort((a, b) => {
    if (filters.sort === "price-asc") {
      return a.price - b.price;
    }
    if (filters.sort === "price-desc") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <>
      <div className="grid grid-cols-3 gap-4 flex-1 h-min">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-md p-4 bg-white hover:shadow-lg transition">
            <Link to= {product.name}>
            <div className="flex overflow-auto scrollbar-hide">
              {product.images.map((img) => (
                <img src={img} alt={product.name}
                  className="w-60 h-60 object-contain flex-shrink-0"
                />
              ))}
            </div></Link>

            <h3 className="text-sm font-medium mt-2">{product.name}</h3>

            <p className="text-green-600 font-semibold">₹{product.price.toLocaleString()}</p>

            <div className="text-sm mt-2 grid grid-cols-[90px_1fr] gap-y-2">
              <span className="font-medium">Type:</span><span>{product.type}</span>

              <span className="font-medium">Material:</span><span>{product.material}</span>

              <span className="font-medium">Occasion:</span><span>{product.occasion}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WomenFootwearProducts;