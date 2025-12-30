import React from "react";
import { Link } from "react-router-dom";
import AcerAspire7 from "../images/Acer Aspire 7 Intel Core i5 12th Gen 12450H.webp";
import HP15s from "../images/HP 15s AMD Ryzen 3 Dual Core 3250U.webp";
import HP15s_2 from "../images/HP 15s AMD Ryzen 3 Dual Core 3250U_2.webp";
import HP15s_3 from "../images/HP 15s AMD Ryzen 3 Dual Core 3250U_3.webp";
import DellInspiron3511 from "../images/DELL Inspiron Intel Core i3 11th Gen 1115G4.webp";
import DellInspiron3511_2 from "../images/DELL Inspiron Intel Core i3 11th Gen 1115G4_2.webp";
import DellInspiron3511_3 from "../images/DELL Inspiron Intel Core i3 11th Gen 1115G4_3.webp";
import AcerSwift3 from "../images/Acer Swift 3 AMD Athlon Dual Core 300U.webp";
import AcerSwift3_2 from "../images/Acer Swift 3 AMD Athlon Dual Core 300U_2.webp";
import AcerSwift3_3 from "../images/Acer Swift 3 AMD Athlon Dual Core 300U_3.webp";
import AsusTUFF15 from "../images/ASUS TUF Gaming F15.webp";
import AcerNitroLite16 from "../images/Acer NITRO LITE 16 Intel Core i5 13th Gen 13420H.webp";

const products = [
  {
    id: 1,
    brand: "Acer",
    name: "Acer Aspire 7 Gaming",
    price: 54999,
    images: [AcerAspire7],
    processorBrand: "Intel",
    processor: "Core i5",
    processorGen: "12th Gen",
    processorModel: "12450H",
    graphicsMemory: "4 GB",
    gpuSeries: "NVIDIA GeForce RTX Series",
    gpuName: "NVIDIA GeForce RTX 2050",
    ram: "8 GB",
    ramType: "DDR4",
    ssd: "512 GB",
    hdd: "",
    displaySize: "15.6 inches",
    displayType: "LCD",
  },
  {
    id: 2,
    brand: "HP",
    name: "HP 15s",
    price: 38999, 
    images: [HP15s,HP15s_2,HP15s_3],
    processorBrand: "AMD",
    processor: "Ryzen 3",
    processorGen: "", 
    processorModel: "3250U",
    graphicsMemory: "Integrated Graphics Card",
    gpuSeries: "AMD Radeon Graphics Series",
    gpuName: "AMD Radeon Graphics",
    ram: "8 GB",
    ramType: "DDR4",
    ssd: "256 GB",
    hdd: "1 TB",
    displaySize: "15.6 inches",
    displayType: "LCD"
  },
  {
    id: 3,
    brand: "DELL",
    name: "DELL Inspiron 3511",
    price: 41999,
    images: [DellInspiron3511,DellInspiron3511_2,DellInspiron3511_3],
    processorBrand: "Intel",
    processor: "Core i3",
    processorGen: "11th Gen",
    processorModel: "1115G4",
    graphicsMemory: "Integrated Graphics Card",
    gpuSeries: "Intel UHD Graphics",
    gpuName: "Intel UHD Graphics",
    ram: "8 GB",
    ramType: "DDR4",
    ssd: "256 GB",
    hdd: "1 TB",
    displaySize: "15.6 inches",
    displayType: "LCD"
  },
  {
    id: 4,
    brand: "Acer",
    name: "Acer Swift 3",
    price: 29999,
    images: [AcerSwift3,AcerSwift3_2,AcerSwift3_3],
    processorBrand: "AMD",
    processor: "Athlon",
    processorGen: "",
    processorModel: "300U",
    graphicsMemory: "Integrated Graphics Card",
    gpuSeries: "AMD Radeon Graphics Series",
    gpuName: "AMD Radeon Graphics",
    ram: "4 GB",
    ramType: "DDR4",
    ssd: "",
    hdd: "1 TB",
    displaySize: "14 inches",
    displayType: "LCD"
  },
  {
    id: 5,
    brand: "ASUS",
    name: "ASUS TUF Gaming F15 Laptop",
    price: 56999, 
    images: [AsusTUFF15],
    processorBrand: "Intel",
    processor: "Core i5",
    processorGen: "11th Gen",
    processorModel: "11260H",
    graphicsMemory: "4 GB",
    gpuSeries: "NVIDIA GeForce RTX Series",
    gpuName: "NVIDIA GeForce RTX 2050",
    ram: "8 GB",
    ramType: "DDR4",
    ssd: "512 GB",
    hdd: "",
    displaySize: "15.6 inches",
    displayType: "LCD"
  },
  {
    id: 6,
    brand: "Acer",
    name: "Acer NITRO LITE 16 Gaming Laptop",
    price: 72999, 
    images: [AcerNitroLite16],
    processorBrand: "Intel",
    processor: "Core i5",
    processorGen: "13th Gen",
    processorModel: "13420H",
    graphicsMemory: "6 GB",
    gpuSeries: "NVIDIA GeForce RTX Series",
    gpuName: "NVIDIA GeForce RTX 3050",
    ram: "16 GB",
    ramType: "DDR4",
    ssd: "512 GB",
    hdd: "",
    displaySize: "16 inches",
    displayType: "LCD"
  }


];

const getDisplaySizeInInches = (size) => { return parseFloat(size);};

const matchDisplaySizeRange = (size, ranges) => {
  if (ranges.length === 0) return true;

  return ranges.some((range) => {
    if (range === "Below 12 inch") return size < 12;
    if (range === "12 - 12.9 inch") return size >= 12 && size < 13;
    if (range === "13 - 13.9 inch") return size >= 13 && size < 14;
    if (range === "14 - 14.9 inch") return size >= 14 && size < 15;
    if (range === "15 - 15.9 inch") return size >= 15 && size < 16;
    if (range === "16 - 17.9 inch") return size >= 16 && size < 18;
    if (range === "18 - 20 inch") return size >= 18 && size <= 20;
    if (range === "Above 20 inch") return size > 20;
    return false;
  });
};

const LaptopProducts = ({ filters }) => {
  const filteredProducts = products.filter((product) => {

    const sizeInches = getDisplaySizeInInches(product.displaySize);

    const ramMatch = filters.ram.length === 0 || filters.ram.includes(product.ram);
    const ramTypeMatch = filters.ramType.length === 0 || filters.ramType.includes(product.ramType);
    const ssdMatch = filters.ssd.length === 0 || filters.ssd.includes(product.ssd);
    const hddMatch = filters.hdd.length === 0 || filters.hdd.includes(product.hdd);
    const brandMatch = filters.brand.length === 0 || filters.brand.includes(product.brand);
    const processorBrandMatch = filters.processorBrand.length === 0 || filters.processorBrand.includes(product.processorBrand);
    const processorMatch = filters.processor.length === 0 || filters.processor.includes(product.processor);
    const processorGenMatch = filters.processorGen.length === 0 || filters.processorGen.includes(product.processorGen);
    const gpuSeriesMatch = filters.gpuSeries.length === 0 || filters.gpuSeries.includes(product.gpuSeries);
    const graphicsMemoryMatch = filters.graphicsMemory.length === 0 || filters.graphicsMemory.includes(product.graphicsMemory);
    const displayMatch = filters.display.length === 0 || filters.display.includes(product.displayType);
    const priceMatch = !filters.price || product.price <= filters.price;
    const displaySizeMatch = matchDisplaySizeRange(sizeInches,filters.displaySizeRange);

    return (
      ramMatch && 
      ramTypeMatch && 
      ssdMatch && 
      hddMatch && 
      brandMatch && 
      processorBrandMatch && 
      processorMatch && 
      processorGenMatch &&
      graphicsMemoryMatch &&
      gpuSeriesMatch &&
      displayMatch && 
      priceMatch &&  
      displaySizeMatch
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
            <div className="flex overflow-auto scrollbar-hide">  
              {product.images.map((img) => (
                <img
                  key={product.id}
                  src={img}
                  alt={product.name}
                  className="w-60 h-60 object-contain flex-shrink-0"
                />
              ))}
            </div></Link>

            <h3 className="text-sm font-medium mt-2">{product.name} - {product.processorModel}</h3>

            <p className="text-green-600 font-semibold">₹{product.price.toLocaleString()}</p>

            {/* Specs */}
            <div className="text-sm mt-2 grid grid-cols-[100px_1fr] gap-y-2">
              
              <span className="font-medium">Processor:</span>
              <span>{product.processorBrand} {product.processor} {product.processorGen}</span>

              <span className="font-medium">RAM:</span>
              <span>{product.ram} {product.ramType}</span>

              <span className="font-medium">Storage:</span>
              <span>
                {product.ssd && `${product.ssd} SSD`}
                {product.ssd && product.hdd && " + "}
                {product.hdd && `${product.hdd} HDD`}
              </span>
              
              <span className="font-medium">Graphics:</span>
              <span>{product.gpuName}</span>

              <span className="font-medium">Display:</span>
              <span>{product.displaySize} | {product.displayType}</span>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default LaptopProducts;
