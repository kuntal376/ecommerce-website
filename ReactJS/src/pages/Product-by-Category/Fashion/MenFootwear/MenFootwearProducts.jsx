import React from "react";
import Afrojack_Boots_Men from "../images/Afrojack-Boots-Men.webp";
import BTOM_Oxford_Men from '../images/BTOM-Oxford-For-Men.webp';
import CAMPUS_Sneakers_Men from '../images/CAMPUS-OG-43-Sneakers-For-Men.webp';
import CAMPUS_RunningShoes_Men from "../images/CAMPUS-Running-Shoes-Men.webp";
import CAMPUS_RunningShoes_Men2 from "../images/CAMPUS-Running-Shoes-Men2.webp";
import CAMPUS_RunningShoes_Men3 from "../images/CAMPUS-Running-Shoes-Men3.webp";
import Glitchez_Clogs_Men from '../images/Glitchez-Outdoor-Clogs-Sandal-Men.webp';
import Glitchez_Clogs_Men2 from '../images/Glitchez-Outdoor-Clogs-Sandal-Men2.webp';
import Glitchez_Clogs_Men3 from '../images/Glitchez-Outdoor-Clogs-Sandal-Men3.webp';
import Shimer_Men_Sandal from "../images/Shimer-Men-Sandal.webp";
import Shimer_Men_Sandal2 from "../images/Shimer-Men-Sandal2.webp";
import Shimer_Men_Sandal3 from "../images/Shimer-Men-Sandal3.webp";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    brand: "Afrojack",
    name: "Afrojack Boots For Men",
    price: 659,
    images: [Afrojack_Boots_Men],
    type: "Boots",
    material: "Leather",
    occasion: "Formal"
  },
  {
    id: 2,
    brand: "BTOM",
    name: "BTOM Oxford For Men",
    price: 729,
    images: [BTOM_Oxford_Men],
    type: "Oxford",
    material: "Leather",
    occasion: "Formal"
  },
  {
    id: 3, 
    brand: "Glitchz",
    name: "Glitchz Outdoors Clogs Sandal For Men",
    price: 249,
    images: [Glitchez_Clogs_Men, Glitchez_Clogs_Men2, Glitchez_Clogs_Men3],
    type: "Sandal",
    material: "Polyester",
    occasion: "Casual"
  },
  {
    id: 4, 
    brand: "CAMPUS",
    name: "CAMPUS Running Shoes Men",
    price: 499,
    images: [CAMPUS_RunningShoes_Men, CAMPUS_RunningShoes_Men2, CAMPUS_RunningShoes_Men3],
    type: "Running Shoes",
    material: "Rubber",
    occasion: "Casual"
  },
  {
    id: 5, 
    brand: "CAMPUS",
    name: "CAMPUS Sneakers For Men",
    price: 645,
    images: [CAMPUS_Sneakers_Men],
    type: "Sneakers",
    material: "Canvas",
    occasion: "Casual"
  },
  {
    id: 6, 
    brand: "Shimer",
    name: "Shimer Men's Sandal",
    price: 463,
    images: [Shimer_Men_Sandal, Shimer_Men_Sandal2, Shimer_Men_Sandal3],
    type: "Sandal",
    material: "Leather",
    occasion: "Festive"
  },
];

const MenFootwearProducts = ({ filters }) => {
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

export default MenFootwearProducts;
