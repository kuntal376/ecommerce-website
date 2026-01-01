import React from "react";
import VeBNoR_Men_RegularShirt from "../images/VeBNoR-Men-Regular-Fit-Formal-Shirt.webp";
import VeBNoR_Men_RegularShirt2 from "../images/VeBNoR-Men-Regular-Fit-Formal-Shirt2.webp";
import VeBNoR_Men_RegularShirt3 from "../images/VeBNoR-Men-Regular-Fit-Formal-Shirt3.webp";
import DEEMOON_Men_CasualShirt from "../images/DEEMOON-Regular-Fit-Casual-Shirt.webp";
import DEEMOON_Men_CasualShirt2 from "../images/DEEMOON-Regular-Fit-Casual-Shirt2.webp";
import DEEMOON_Men_CasualShirt3 from "../images/DEEMOON-Regular-Fit-Casual-Shirt3.webp";
import KENI_Men_Solid_Tshirt from "../images/KENI-Men-Solid-Pure-Cotton-T-Shirt.webp";
import KENI_Men_Solid_Tshirt2 from "../images/KENI-Men-Solid-Pure-Cotton-T-Shirt2.webp";
import KENI_Men_Solid_Tshirt3 from "../images/KENI-Men-Solid-Pure-Cotton-T-Shirt3.webp"
import VeBNoR_Men_Solid_Tshirt from "../images/VeBNoR-Men-Solid-Polyester-T-Shirt.webp";
import VeBNoR_Men_Solid_Tshirt2 from "../images/VeBNoR-Men-Solid-Polyester-T-Shirt2.webp";
import VeBNoR_Men_Solid_Tshirt3 from "../images/VeBNoR-Men-Solid-Polyester-T-Shirt3.webp"
import HUMJOLI_Men_Blazer from "../images/HUMJOLI-Men-Blazer.webp"
import HUMJOLI_Men_Blazer2 from "../images/HUMJOLI-Men-Blazer2.webp"
import HUMJOLI_Men_Maroon_Blazer from "../images/HUMJOLI-Men-Solid-Maroon-Blazer.webp"
import HUMJOLI_Men_Maroon_Blazer2 from "../images/HUMJOLI-Men-Solid-Maroon-Blazer2.webp"
import DIMMY_Printed_Kurta from "../images/Dimmy-Men-Printed-Cotton-Kurta.webp";
import DIMMY_Printed_Kurta2 from "../images/Dimmy-Men-Printed-Cotton-Kurta2.webp";
import DIMMY_Printed_Kurta3 from "../images/Dimmy-Men-Printed-Cotton-Kurta3.webp";
import GOURI_Men_Embellished_Ethnic_Dress from "../images/GOURI-Men-Embellished-Cotton-Silk-Ethnic-Dress.webp";
import GOURI_Men_Embellished_Ethnic_Dress2 from "../images/GOURI-Men-Embellished-Cotton-Silk-Ethnic-Dress2.webp";
import MOTREX_Men_Casual_Jacket from "../images/MOTREX-Men-Casual-Jacket.webp";
import MOTREX_Men_Casual_Jacket2 from "../images/MOTREX-Men-Casual-Jacket2.webp";
import MOTREX_Men_Casual_Jacket3 from "../images/MOTREX-Men-Casual-Jacket3.webp";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    brand: "DEEMOON",
    name: "DEEMOON Men Regular Fit Casual Shirt",
    price: 359,
    images: [DEEMOON_Men_CasualShirt,DEEMOON_Men_CasualShirt2,DEEMOON_Men_CasualShirt3],
    dressType: "Shirt",
    fabric: "Polyester",
    sleeveLength: "Half Sleeve",
    fit: "Regular",
    closureType: "Buttoned",
    occasion: "Casual"
  },
  {
    id: 2,
    brand: "VeBNoR",
    name: "VeBNoR Men Regular Fit Formal Shirt",
    price: 289,
    images: [VeBNoR_Men_RegularShirt,VeBNoR_Men_RegularShirt2,VeBNoR_Men_RegularShirt3],
    dressType: "Shirt",
    fabric: "Cotton",
    sleeveLength: "Full Sleeve",
    fit: "Regular",
    closureType: "Buttoned",
    occasion: "Formal"
  },
  {
    id: 3,
    brand: "KENI",
    name: "KENI MenSolid Pure Cotton T-Shirt",
    price: 290,
    images: [KENI_Men_Solid_Tshirt, KENI_Men_Solid_Tshirt2, KENI_Men_Solid_Tshirt3],
    dressType: "T-Shirt",
    fabric: "Cotton",
    sleeveLength: "Half Sleeve",
    fit: "Over-sized",
    closureType: "None",
    occasion: "Casual"
  },
  {
    id: 4,
    brand: "VeBNoR",
    name: "VeBNoR Men Solid Polyester T-Shirt",
    price: 289,
    images: [VeBNoR_Men_Solid_Tshirt, VeBNoR_Men_Solid_Tshirt2, VeBNoR_Men_Solid_Tshirt3],
    dressType: "T-Shirt",
    fabric: "Polyester",
    sleeveLength: "Full Sleeve",
    fit: "Regular",
    closureType: "None",
    occasion: "Casual"
  },
  {
    id: 5,
    brand: "HUMJOLI",
    name: "HUMJOLI Men Black Blazer ",
    price: 1749,
    images: [HUMJOLI_Men_Blazer, HUMJOLI_Men_Blazer2],
    dressType: "Blazer",
    fabric: "Cotton",
    sleeveLength: "Full Sleeve",
    fit: "Regular",
    closureType: "Buttoned",
    occasion: "Formal"
  },
  {
    id: 6,
    brand: "HUMJOLI",
    name: "HUMJOLI Men Maroon Blazer",
    price: 1779,
    images: [HUMJOLI_Men_Maroon_Blazer, HUMJOLI_Men_Maroon_Blazer2],
    dressType: "Blazer",
    fabric: "Cotton",
    sleeveLength: "Full Sleeve",
    fit: "Regular",
    closureType: "Buttoned",
    occasion: "Formal"
  },
  {
    id: 7,
    brand: "DIMMY",
    name: "DIMMY Printed Kurta",
    price: 349,
    images: [DIMMY_Printed_Kurta, DIMMY_Printed_Kurta2, DIMMY_Printed_Kurta3],
    dressType: "Kurta",
    fabric: "Cotton",
    sleeveLength: "Full Sleeve",
    fit: "Regular",
    closureType: "Buttoned",
    occasion: "Festive"
  },
  {
    id: 8,
    brand: "GOURI",
    name: "GOURI Men Embellished Cotton Silk Ethnic Dress",
    price: 949,
    images: [GOURI_Men_Embellished_Ethnic_Dress, GOURI_Men_Embellished_Ethnic_Dress2],
    dressType: "Kurta",
    fabric: "Cotton",
    sleeve: "Full Sleeve",
    fit: "Regular",
    closureType: "Buttoned",
    occasion: "Festive"
  },
  {
    id: 9,
    brand: "MOTREX",
    price: 500,
    images: [MOTREX_Men_Casual_Jacket, MOTREX_Men_Casual_Jacket2, MOTREX_Men_Casual_Jacket3],
    dressType: "Jacket",
    fabric: "Polyester",
    sleeve: "Full Sleeve",
    fit: "Over-sized",
    closureType: "Zipped",
    occasion: "Casual"
  }
];

const MenTopWearProducts = ({ filters }) => {
  const filteredProducts = products.filter((product) => {

    const dressTypeMatch = filters.dressType.length === 0 || filters.dressType.includes(product.dressType);
    const fabricMatch = filters.fabric.length === 0 || filters.fabric.includes(product.fabric);
    const brandMatch = filters.brand.length === 0 || filters.brand.includes(product.brand);
    const sleeveMatch = filters.sleeve.length === 0 || filters.sleeve.includes(product.sleeveLength);
    const closureMatch = filters.closure.length === 0 || filters.closure.includes(product.closureType);
    const fitMatch = filters.fit.length === 0 || filters.fit.includes(product.fit);
    const priceMatch = !filters.price || product.price <= filters.price;

    return (
      dressTypeMatch && fabricMatch && brandMatch && sleeveMatch && priceMatch && closureMatch && fitMatch
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

              <span className="font-medium">Sleeve:</span><span>{product.sleeveLength}</span>

              <span className="font-medium">Fit:</span><span>{product.fit}</span>

              <span className="font-medium">Closure Type:</span><span>{product.closureType}</span>

              <span className="font-medium">Occasion:</span><span>{product.occasion}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenTopWearProducts;
