import React from "react";
import Smartlook_Travel_Waterproof_Backpack from "../images/Smartlook-Travel-Waterproof-Backpack.webp";
import LuluSky_Brown_SlingBag from "../images/Lulu&Sky-Brown-Sling-Bag.webp";
import Malabis_Women_Handbag from "../images/Malabis-Women-Handbag.webp";
import Malabis_Women_Handbag2 from "../images/Malabis-Women-Handbag2.webp";
import Malabis_Women_Handbag3 from "../images/Malabis-Women-Handbag3.webp";
import LuluSky_White_SlingBag from "../images/Lulu&Sky-White-Sling-Bag.webp";
import InteEnterprise_StrolleyDuffelBag from "../images/Inte-Enterprise-Strolley-Duffel-Bag.webp";
import KLASSY_Transparent_TrolleyBag from "../images/KLASSY-Transparent-Trolley-Bag.webp";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    brand: "Smart Look",
    name: "Smart Look Travel Water",
    price: 879,
    images: [Smartlook_Travel_Waterproof_Backpack],
    type: "Backpack",
    material: "Polyester",
    occasion: "Travel"
  },
  {
    id: 2,
    brand: "Lulu & Sky",
    name: "Lulu & Sky Brown Sling Bag",
    price: 385,
    images: [LuluSky_Brown_SlingBag],
    type: "Sling Bag",
    material: "Leather",
    occasion: "Casual"
  },
  {
    id: 3,
    brand: "Malabis",
    name: "Malabis Women Handbag",
    price: 349,
    images: [Malabis_Women_Handbag, Malabis_Women_Handbag2, Malabis_Women_Handbag3],
    type: "Handbag",
    material: "Jute",
    occasion: "Casual"
  },
  {
    id: 4,
    brand: "Lulu & Sky",
    name: "Lulu & Sky White Sling Bag",
    price: 394,
    images: [LuluSky_White_SlingBag],
    type: "Sling Bag",
    material: "Leather",
    occasion: "Casual"
  },
  {
    id: 5,
    brand: "Inte Enterprise",
    name: "Inte Enterprise Strolley Duffle Bag",
    price: 674,
    images: [InteEnterprise_StrolleyDuffelBag],
    type: "Duffle Bag",
    material: "Polyester",
    occasion: "Travel"
  },
  {
    id: 6,
    brand: "KLASSY",
    name: "KLASSY Transparent Trolley Bag",
    price: 523,
    images: [KLASSY_Transparent_TrolleyBag],
    type: "Trolley Bag",
    material: "Polyester",
    occasion: "Travel"
  },
];

const BagsLuggagesProducts = ({ filters }) => {
  const filteredProducts = products.filter((product) => {

    const typeMatch = filters.type.length === 0 || filters.type.includes(product.type);
    const materialMatch = filters.material.length === 0 || filters.material.includes(product.material);
    const brandMatch = filters.brand.length === 0 || filters.brand.includes(product.brand);
    const priceMatch = !filters.price || product.price <= filters.price;

    return (
      typeMatch && materialMatch && brandMatch && priceMatch
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

export default BagsLuggagesProducts;