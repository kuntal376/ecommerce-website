import React from "react";
import SamsungM14 from "../images/samsung-galaxy-m14-5g.webp";
import SamsungM14_2 from "../images/samsung-galaxy-m14-5g-2.webp";
import SamsungM14_3 from "../images/samsung-galaxy-m14-5g-3.webp";
import SamsungM34 from "../images/Samsung-Galaxy-M34-5g.jpg";
import SamsungM34_2 from "../images/Samsung-Galaxy-M34-5g-2.webp";
import SamsungM34_3 from "../images/Samsung-Galaxy-M34-5g-3.webp";
import SamsungA15 from "../images/Samsung-Galaxy-A15-5g.png";
import SamsungA15_2 from "../images/Samsung-Galaxy-A15-5g-2.webp";
import SamsungA15_3 from "../images/Samsung-Galaxy-A15-5g-3.webp";
import SamsungF54 from "../images/Samsung-Galaxy-F54-5g.jfif";
import SamsungF54_2 from "../images/Samsung-Galaxy-F54-5g-2.jpg";
import SamsungF54_3 from "../images/Samsung-Galaxy-F54-5g-3.webp";
import RealmeP3x from "../images/Realme-p3x-5g.webp";
import RealmeP3x_2 from "../images/Realme-p3x-5g-2.webp";
import RealmeP3x_3 from "../images/Realme-p3x-5g-3.webp";
import Realme15pro from "../images/Realme-15-pro-5g.webp";
import Realme15pro_2 from "../images/Realme-15-pro-5g-2.webp";
import Realme15pro_3 from "../images/Realme-15-pro-5g-3.webp";
import RedmiA5 from "../images/Redmi-a5.webp";
import RedmiA5_2 from "../images/Redmi-a5-2.webp";
import RedmiA5_3 from "../images/Redmi-a5-3.webp";
import RedmiNote14ProPlus from "../images/Redmi-note-14pro+-5g.webp";
import RedmiNote14ProPlus_2 from "../images/Redmi-note-14pro+-5g-2.webp";
import OneplusNord5 from "../images/Oneplus-nord5-5g.webp"
import OneplusNord5_2 from "../images/Oneplus-nord5-5g-2.webp"
import OneplusNord5_3 from "../images/Oneplus-nord5-5g-3.webp"

const products = [
  {
    id: 1,
    brand: "Samsung",
    name: "Samsung Galaxy F54",
    price: 29999,
    images: [SamsungF54,SamsungF54_2,SamsungF54_3],
    ram: "8 GB",
    rom: "256 GB",
    displaySize: "6.7 inches",
    displayType: "Super AMOLED Plus",
    rearCamera: "108 MP",
    frontCamera: "32 MP"
  },
  {
    id: 2,
    brand: "Samsung",
    name: "Samsung Galaxy M14",
    price: 12999,
    images: [SamsungM14,SamsungM14_2,SamsungM14_3],
    ram: "4 GB",
    rom: "128 GB",
    displaySize: "6.6 inches",
    displayType: "PLS LCD",
    rearCamera: "50 MP",
    frontCamera: "13 MP"
  },
  {
    id: 3,
    brand: "Samsung",
    name: "Samsung Galaxy M34",
    price: 18999,
    images: [SamsungM34,SamsungM34_2,SamsungM34_3],
    ram: "6 GB",
    rom: "128 GB",
    displaySize: "6.6 inches",
    displayType: "Super AMOLED",
    rearCamera: "50 MP",
    frontCamera: "13 MP"
  },
  {
    id: 4,
    brand: "Samsung",
    name: "Samsung Galaxy A15",
    price: 14999,
    images: [SamsungA15,SamsungA15_2,SamsungA15_3],
    ram: "4 GB",
    rom: "128 GB",
    displaySize: "6.5 inches",
    displayType: "Super AMOLED",
    rearCamera: "50 MP",
    frontCamera: "13 MP"
  },
  {
    id: 5,
    brand: "Realme",
    name: "Realme P3x 5G",
    price: 13999,
    images: [RealmeP3x,RealmeP3x_2,RealmeP3x_3],
    ram: "6 GB",
    rom: "128 GB",
    displaySize: "6.72 inches",
    displayType: "FHD+ LCD",
    rearCamera: "50 MP + 2 MP",
    frontCamera: "8 MP"
  },
  {
    id: 6,
    brand: "Realme",
    name: "Realme 15 Pro 5G",
    price: 27999,
    images: [Realme15pro,Realme15pro_2,Realme15pro_3],
    ram: "8 GB",
    rom: "256 GB",
    displaySize: "6.7 inches",
    displayType: "AMOLED",
    rearCamera: "50 MP + 8 MP + 2 MP",
    frontCamera: "32 MP"
  },
  {
    id: 7,
    brand: "Redmi",
    name: "REDMI A5",
    price: 9999,
    images: [RedmiA5,RedmiA5_2,RedmiA5_3],
    ram: "4 GB",
    rom: "128 GB",
    displaySize: "6.52 inches",
    displayType: "HD+ IPS LCD",
    rearCamera: "13 MP",
    frontCamera: "5 MP"
  },
  {
    id: 8,
    brand: "Redmi",
    name: "REDMI Note 14 Pro+ 5G",
    price: 32999,
    images: [RedmiNote14ProPlus, RedmiNote14ProPlus_2],
    ram: "8 GB",
    rom: "128 GB",
    displaySize: "6.67 inches",
    displayType: "AMOLED",
    rearCamera: "200 MP + 8 MP + 2 MP",
    frontCamera: "16 MP"
  },
  {
    id: 9,
    brand: "OnePlus",
    name: "OnePlus Nord 5 5G",
    price: 35999,
    images: [OneplusNord5,OneplusNord5_2,OneplusNord5_3],
    ram: "12 GB",
    rom: "256 GB",
    displaySize: "6.74 inches",
    displayType: "AMOLED",
    rearCamera: "50 MP + 8 MP",
    frontCamera: "32 MP"
  }
];

const MobileProducts = ({ filters }) => {
  const filteredProducts = products.filter((product) => {

    const ramMatch = filters.ram.length === 0 || filters.ram.includes(product.ram);
    const storageMatch = filters.storage.length === 0 || filters.storage.includes(product.rom);
    const brandMatch = filters.brand.length === 0 || filters.brand.includes(product.brand);
    const displayMatch = filters.display.length === 0 || filters.display.includes(product.displayType);
    const priceMatch = !filters.price || product.price <= filters.price;

    return (
      ramMatch && storageMatch && brandMatch && displayMatch && priceMatch
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
      <div className="grid grid-cols-3 gap-4 flex-1">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-md p-4 bg-white hover:shadow-lg transition">
            <div className="flex overflow-auto scrollbar-hide">
              {product.images.map((img) => (
                <img src={img} alt={product.name}
                  className="w-60 h-60 object-contain flex-shrink-0"
                />
              ))}
            </div>

            <h3 className="text-sm font-medium mt-2">{product.name}</h3>

            <p className="text-green-600 font-semibold">₹{product.price.toLocaleString()}</p>

            <div className="text-sm mt-2 grid grid-cols-[90px_1fr] gap-y-2">
              <span className="font-medium">RAM:</span><span>{product.ram}</span>

              <span className="font-medium">Storage:</span><span>{product.rom}</span>

              <span className="font-medium">Display:</span><span>{product.displaySize} | {product.displayType}</span>

              <span className="font-medium">Camera:</span><span>{product.rearCamera} Rear | {product.frontCamera} Front</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileProducts;
