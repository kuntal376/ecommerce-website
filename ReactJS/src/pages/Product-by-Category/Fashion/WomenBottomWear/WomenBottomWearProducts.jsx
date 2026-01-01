import React from "react";
import BeautyGarments_Cotton_Women_Salwar from "../images/BeautyGarments-Pure-Cotton-Solid-Women-Beige-Salwar.webp";
import BeautyGarments_Cotton_Women_Salwar2 from "../images/BeautyGarments-Pure-Cotton-Solid-Women-Beige-Salwar2.webp";
import Deklook_Women_Skirt from "../images/Deklook-Women-Self-Design-Flared-Skirt.webp";
import Deklook_Women_Skirt2 from "../images/Deklook-Women-Self-Design-Flared-Skirt2.webp";
import Deklook_Women_Skirt3 from "../images/Deklook-Women-Self-Design-Flared-Skirt3.webp";
import Guti_Women_Jeans from "../images/Guti-Women-Flared-High-Rise-Jeans.webp";
import Guti_Women_Jeans2 from "../images/Guti-Women-Flared-High-Rise-Jeans2.webp";
import Guti_Women_Jeans3 from "../images/Guti-Women-Flared-High-Rise-Jeans3.webp";
import HouseOfCommon_Women_Sharara from '../images/HouseOfCommon-Women-Relaxed-Viscose-Rayon-Sharara.webp';
import HouseOfCommon_Women_Sharara2 from '../images/HouseOfCommon-Women-Relaxed-Viscose-Rayon-Sharara2.webp';
import HouseOfCommon_Women_Sharara3 from '../images/HouseOfCommon-Women-Relaxed-Viscose-Rayon-Sharara3.webp';
import Mannat_Women_Printed_Skirt from "../images/Mannat-Women-Printed-A-line-Multicolor-Skirt.webp";
import Mannat_Women_Printed_Skirt2 from "../images/Mannat-Women-Printed-A-line-Multicolor-Skirt2.webp";
import NUCOUTHS_Women_LooseFit_Jeans from "../images/NUCOUTHS-Women-Loose-Fit-High-Rise-Jeans.webp";
import NUCOUTHS_Women_LooseFit_Jeans2 from "../images/NUCOUTHS-Women-Loose-Fit-High-Rise-Jeans2.webp";
import NUCOUTHS_Women_LooseFit_Jeans3 from "../images/NUCOUTHS-Women-Loose-Fit-High-Rise-Jeans3.webp";
import PINOVO_Women_Sharara from "../images/PINOVO-Women-Relaxed-Cotton-Blend-Sharara.webp";
import PINOVO_Women_Sharara2 from "../images/PINOVO-Women-Relaxed-Cotton-Blend-Sharara2.webp";
import PINOVO_Women_Sharara3 from "../images/PINOVO-Women-Relaxed-Cotton-Blend-Sharara3.webp";
import SmartVision_Women_Trousers from "../images/SmartVision-Women-Regular-Fit-Beige-Viscose-Rayon-Trousers.webp";
import SmartVision_Women_Trousers2 from "../images/SmartVision-Women-Regular-Fit-Beige-Viscose-Rayon-Trousers2.webp";
import SmartVision_Women_Trousers3 from "../images/SmartVision-Women-Regular-Fit-Beige-Viscose-Rayon-Trousers3.webp";
import Stywa_Ankle_Length_Legging from "../images/Stywa-Ankle-Length-Legging.webp";
import Stywa_Ankle_Length_Legging2 from "../images/Stywa-Ankle-Length-Legging2.webp";
import Stywa_Ankle_Length_Legging3 from "../images/Stywa-Ankle-Length-Legging3.webp";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    brand: "Beauty Garments",
    name: "Beauty Garments Pure Cotton Women Salwar",
    price: 359,
    images: [BeautyGarments_Cotton_Women_Salwar, BeautyGarments_Cotton_Women_Salwar2],
    dressType: "Salwar",
    fabric: "Cotton",
    fit: "Loose",
    occasion: "Casual"
  },
  {
    id: 2,
    brand: "Deklook",
    name: "Deklook Women Self-Design Flared Skirt",
    price: 506,
    images: [Deklook_Women_Skirt, Deklook_Women_Skirt2, Deklook_Women_Skirt3],
    dressType: "Skirt",
    fabric: "Cotton",
    fit: "Loose",
    occasion: "Party"
  },
  {
    id: 3,
    brand: "Guti",
    name: "Guti Women Flared High Rise Jeans",
    price: 768,
    images: [Guti_Women_Jeans, Guti_Women_Jeans2, Guti_Women_Jeans3],
    dressType: "Jeans",
    fabric: "Denim",
    fit: "Straight",
    occasion: "Party"
  },
  {
    id: 4,
    brand: "House of Common",
    name: "House of Common Relaxed Viscose Rayon Sharara",
    price: 475,
    images: [HouseOfCommon_Women_Sharara, HouseOfCommon_Women_Sharara2, HouseOfCommon_Women_Sharara3],
    dressType: "Sharara",
    fabric: "Rayon",
    fit: "Loose",
    occasion: "Festive"
  },
  {
    id: 5,
    brand: "Mannat",
    name: "Mannat Women A-line Skirt",
    price: 378,
    images: [Mannat_Women_Printed_Skirt, Mannat_Women_Printed_Skirt2],
    dressType: "Skirt",
    fabric: "Polyester",
    fit: "Regular",
    occasion: "Party"
  },
  {
    id: 6,
    brand: "NUCOUTHS",
    name: "NUCOUTHS Women Loose Fit Jeans",
    price: 1015,
    images: [NUCOUTHS_Women_LooseFit_Jeans, NUCOUTHS_Women_LooseFit_Jeans2, NUCOUTHS_Women_LooseFit_Jeans3],
    dressType: "Jeans",
    fabric: "Denim",
    fit: "Loose",
    occasion: "Party"
  },
  {
    id: 7,
    brand: "PINOVO",
    name: "PINOVO Women Sharara",
    price: 256,
    images: [PINOVO_Women_Sharara, PINOVO_Women_Sharara2, PINOVO_Women_Sharara3],
    dressType: "Sharara",
    fabric: "Polyester",
    fit: "Regular",
    occasion: "Festive"
  },
  {
    id: 8,
    brand: "Smart Vision",
    name: "Smart Visions Regula Fit Trousers",
    price: 459,
    images: [SmartVision_Women_Trousers, SmartVision_Women_Trousers2, SmartVision_Women_Trousers3],
    dressType: "Trousers",
    fabric: "Rayon",
    fit: "Regular",
    occasion: "Party"
  },
  {
    id: 9,
    brand: "Stywa",
    name: "Stywa Ankle Length Leggings",
    price: 279,
    images: [Stywa_Ankle_Length_Legging, Stywa_Ankle_Length_Legging2, Stywa_Ankle_Length_Legging3],
    dressType: "Leggings",
    fabric: "Lycra",
    fit: "Slim",
    occasion: "Casual"
  },
];

const WomenTopWearProducts = ({ filters }) => {
  const filteredProducts = products.filter((product) => {

    const dressTypeMatch = filters.dressType.length === 0 || filters.dressType.includes(product.dressType);
    const fabricMatch = filters.fabric.length === 0 || filters.fabric.includes(product.fabric);
    const brandMatch = filters.brand.length === 0 || filters.brand.includes(product.brand);
    const occasionMatch = filters.occasion.length === 0 || filters.occasion.includes(product.occasion);
    const fitMatch = filters.fit.length === 0 || filters.fit.includes(product.fit);
    const priceMatch = !filters.price || product.price <= filters.price;

    return (
      dressTypeMatch && fabricMatch && brandMatch && priceMatch && fitMatch && occasionMatch
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
              <span className="font-medium">Dress Type:</span><span>{product.dressType}</span>

              <span className="font-medium">Fabric Type:</span><span>{product.fabric}</span>

              <span className="font-medium">Fit:</span><span>{product.fit}</span>

              <span className="font-medium">Occasion:</span><span>{product.occasion}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WomenTopWearProducts;
