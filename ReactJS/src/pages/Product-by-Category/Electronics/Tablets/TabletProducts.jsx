import React from "react";
import { Link } from "react-router-dom";
import RedmiPadSE4 from "../images/REDMI Pad SE 4 GB RAM 128 GB ROM 11.0 inch with Wi-Fi Only Tablet.webp"
import OnePlusPadLite from "../images/OnePlus Pad Lite 6 GB RAM 128 GB ROM 11.0 inch with Wi-Fi Only Tablet.webp";
import OnePlusPadLite_2 from "../images/OnePlus Pad Lite 6 GB RAM 128 GB ROM 11.0 inch with Wi-Fi Only Tablet_2.webp";
import OnePlusPadLite_3 from "../images/OnePlus Pad Lite 6 GB RAM 128 GB ROM 11.0 inch with Wi-Fi Only Tablet_3.webp";
import RealmePad2 from "../images/realme Pad 2 6 GB RAM 128 GB ROM 11.5 inch with 4G Tablet.webp";
import RealmePad2_2 from "../images/realme Pad 2 6 GB RAM 128 GB ROM 11.5 inch with 4G Tablet_2.webp";
import RealmePad2_3 from "../images/realme Pad 2 6 GB RAM 128 GB ROM 11.5 inch with 4G Tablet_3.webp";
import RedmiPadPro from "../images/REDMI Pad Pro 6 GB RAM 128 GB ROM 12.1 inch with Wi-Fi Only Tablet.webp";
import RedmiPadPro_2 from "../images/REDMI Pad Pro 6 GB RAM 128 GB ROM 12.1 inch with Wi-Fi Only Tablet_2.webp";
import RedmiPadPro_3 from "../images/REDMI Pad Pro 6 GB RAM 128 GB ROM 12.1 inch with Wi-Fi Only Tablet_3.webp";
import MotorolaPad60Pro from "../images/MOTOROLA Pad 60 Pro 8 GB RAM 128 GB ROM 12.7 inch with Wi-Fi Only Gaming Tablet.webp";
import MotorolaPad60Pro_2 from "../images/MOTOROLA Pad 60 Pro 8 GB RAM 128 GB ROM 12.7 inch with Wi-Fi Only Gaming Tablet_2.webp";
import MotorolaPad60Pro_3 from "../images/MOTOROLA Pad 60 Pro 8 GB RAM 128 GB ROM 12.7 inch with Wi-Fi Only Gaming Tablet_3.webp";
import SamsungGalaxyTabS9FEPlus from "../images/Samsung Galaxy Tab S9 FE+ 12 GB RAM 256 GB ROM 12.4 Inch with Wi-Fi Only Tablet.webp";
import SamsungGalaxyTabS9FEPlus_2 from "../images/Samsung Galaxy Tab S9 FE+ 12 GB RAM 256 GB ROM 12.4 Inch with Wi-Fi Only Tablet_2.webp";
import SamsungGalaxyTabS9FEPlus_3 from "../images/Samsung Galaxy Tab S9 FE+ 12 GB RAM 256 GB ROM 12.4 Inch with Wi-Fi Only Tablet_3.webp";



const products = [
  {
    id: 1,
    brand: "Redmi",
    name: "REDMI Pad SE 4 GB RAM 128 GB ROM 11.0 inch Wi-Fi Only Tablet",
    price: 12999,
    images: [RedmiPadSE4],
    ram: "4 GB",
    rom: "128 GB",
    displaySize: "11.0 inches",
    displayType: "FHD+ LCD",
    processor: "Qualcomm Snapdragon 680",
    rearCamera: "8 MP",
    frontCamera: "5 MP"
  },
  {
    id: 2,
    brand: "OnePlus",
    name: "OnePlus Pad Lite 6 GB RAM 128 GB ROM 11.0 inch Wi-Fi Only Tablet",
    price: 19999,
    images: [OnePlusPadLite,OnePlusPadLite_2,OnePlusPadLite_3],
    ram: "6 GB",
    rom: "128 GB",
    displaySize: "11.0 inches",
    displayType: "IPS LCD",
    processor: "MediaTek Helio G99",
    rearCamera: "8 MP",
    frontCamera: "5 MP"
  },
  {
  id: 3,
    brand: "Realme",
    name: "realme Pad 2 6 GB RAM 128 GB ROM 11.5 inch with 4G Tablet",
    price: 15999,
    images: [RealmePad2,RealmePad2_2,RealmePad2_3],
    ram: "6 GB",
    rom: "128 GB",
    displaySize: "11.5 inches",
    displayType: "IPS LCD",
    processor: "MediaTek Helio G99",
    rearCamera: "8 MP",
    frontCamera: "5 MP"
  },
  {
  id: 4,
    brand: "Redmi",
    name: "REDMI Pad Pro 6 GB RAM 128 GB ROM 12.1 inch Wi-Fi Only Tablet",
    price: 21999,
    images: [RedmiPadPro,RedmiPadPro_2,RedmiPadPro_3],
    ram: "6 GB",
    rom: "128 GB",
    displaySize: "12.1 inches",
    displayType: "IPS LCD",
    processor: "Qualcomm Snapdragon 7s Gen 2",
    rearCamera: "8 MP",
    frontCamera: "8 MP"
  },
  {
    id: 5,
    brand: "Motorola",
    name: "MOTOROLA Pad 60 Pro 8 GB RAM 128 GB ROM 12.7 inch Wi-Fi Only Gaming Tablet",
    price: 29999,
    images: [MotorolaPad60Pro,MotorolaPad60Pro_2,MotorolaPad60Pro_3],
    ram: "8 GB",
    rom: "128 GB",
    displaySize: "12.7 inches",
    displayType: "LTPS LCD",
    processor: "MediaTek Dimensity 8300",
    rearCamera: "13 MP",
    frontCamera: "8 MP"
  },
  {
  id: 6,
    brand: "Samsung",
    name: "Samsung Galaxy Tab S9 FE+ 12 GB RAM 256 GB ROM 12.4 Inch Wi-Fi Only Tablet",
    price: 49999,
    images: [SamsungGalaxyTabS9FEPlus,SamsungGalaxyTabS9FEPlus_2,SamsungGalaxyTabS9FEPlus_3],
    ram: "12 GB",
    rom: "256 GB",
    displaySize: "12.4 inches",
    displayType: "TFT LCD",
    processor: "Samsung Exynos 1380",
    rearCamera: "8 MP",
    frontCamera: "12 MP Ultra-Wide"
  }  

];

const TabletProducts = ({ filters }) => {
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
      <div className="h-min grid grid-cols-3 gap-4 flex-1">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-md p-4 bg-white hover:shadow-lg transition">
            <Link to={product.name}>
            <div className="flex gap-x-8 overflow-auto scrollbar-hide">
              {product.images.map((img,index) => (
                <img key={index} src={img} alt={product.name}
                  className="w-60 h-60 object-contain flex-shrink-0"
                />
              ))}
            </div></Link>

            <h3 className="text-sm font-medium mt-2">{product.name}</h3>

            <p className="text-green-600 font-semibold">₹{product.price.toLocaleString()}</p>

            <div className="text-sm mt-2 grid grid-cols-[90px_1fr] gap-y-2">
              <span className="font-medium">RAM:</span><span>{product.ram}</span>

              <span className="font-medium">Storage:</span><span>{product.rom}</span>

              <span className="font-medium">Storage:</span><span>{product.processor}</span>

              <span className="font-medium">Display:</span><span>{product.displaySize} | {product.displayType}</span>

              <span className="font-medium">Camera:</span><span>{product.rearCamera} Rear | {product.frontCamera} Front</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TabletProducts;
