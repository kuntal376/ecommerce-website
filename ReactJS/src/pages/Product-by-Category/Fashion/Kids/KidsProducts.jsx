import React from "react";
import CarryDreams_Boys_Casual_Jacket_Tshirt_Trouser from "../images/CarryDreams-Boys-Casual-Jacket-T-shirt-Trouser.webp";
import AKDC_Handkerchief_Kids from "../images/AKDC-Handkerchief-Kids.webp";
import PAVITRA_Girls_Festive_PartyKurta_Dhoti from "../images/PAVITRA-Girls-Festive-PartyKurta-Dhoti.webp";
import Faton_Baby_Ankle from "../images/Faton-Baby-Ankle-Length.webp";
import Killer_Boys_Pure_Cotton_Regular_TShirt from "../images/Killer-Boys-Pure-Cotton-Regular-T-Shirt.webp";
import Swissberry_Romper_Baby from "../images/Swissberry-Romper-Baby.webp";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    brand: "Carry Dreams",
    name: "Carry Dreams Boys Casual Jacket T-shirt Trouser",
    price: 549,
    images: [CarryDreams_Boys_Casual_Jacket_Tshirt_Trouser],
    dressType: "Dress Set",
    fabric: "Polyester",
    occasion: "Casual"
  },
  {
    id: 2,
    brand: "AKDC",
    name: "AKDC Handkerchief For Kids",
    price: 259,
    images: [AKDC_Handkerchief_Kids],
    dressType: "Handkerchief",
    fabric: "Cotton",
    occasion: "Casual"
  },
  {
    id: 3,
    brand: "PAVITRA",
    name: "PAVITRA Girls Festive Party Kurta-dhoti",
    price: 578,
    images: [PAVITRA_Girls_Festive_PartyKurta_Dhoti],
    dressType: "Dress Set",
    fabric: "Cotton",
    occasion: "Festive"
  },
  {
    id: 4,
    brand: "FATON",
    name: "FATON Baby Ankle Length",
    price: 165,
    images: [Faton_Baby_Ankle],
    dressType: "Ankle",
    fabric: "Polyester",
    occasion: "Casual"
  },
  {
    id: 5,
    brand: "KILLER",
    name: "KILLER Boys Pure Cotton Regular T-Shirt",
    price: 524,
    images: [Killer_Boys_Pure_Cotton_Regular_TShirt],
    dressType: "Dress Srt",
    fabric: "Cotton",
    occasion: "Casual"
  },
  {
    id: 6,
    brand: "Swissberry",
    name: "Swissberry Romper Baby",
    price: 435,
    images: [Swissberry_Romper_Baby],
    dressType: "Romper Dress",
    fabric: "Cotton",
    occasion: "Casual"
  },
];

const KidsProducts = ({ filters }) => {
  const filteredProducts = products.filter((product) => {

    const dressTypeMatch = filters.dressType.length === 0 || filters.dressType.includes(product.dressType);
    const fabricMatch = filters.fabric.length === 0 || filters.fabric.includes(product.fabric);
    const brandMatch = filters.brand.length === 0 || filters.brand.includes(product.brand);
    const priceMatch = !filters.price || product.price <= filters.price;

    return (
      dressTypeMatch && fabricMatch && brandMatch && priceMatch
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

              <span className="font-medium">Fabric:</span><span>{product.fabric}</span>

              <span className="font-medium">Occasion:</span><span>{product.occasion}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default KidsProducts;