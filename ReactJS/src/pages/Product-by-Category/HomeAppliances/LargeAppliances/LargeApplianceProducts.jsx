import React from "react";
import { Link } from "react-router-dom";
import LargeApplianceProductsData from "./LargeApplianceProductsData";

const products = LargeApplianceProductsData

const getCapacityBucket = (value, applianceType) => {
  if (applianceType === "Washing Machine") {
    if (value >= 6 && value < 7) return "6 - 6.9 kg (Washing Machines)";
    if (value >= 7 && value < 8) return "7 - 7.9 kg (Washing Machines)";
    if (value >= 8) return "8 kg & Above (Washing Machines)";
  }

  if (applianceType === "Refrigerator") {
    if (value < 200) return "Below 200 L (Refrigerators)";
    if (value >= 200 && value < 300) return "200 - 299 L (Refrigerators)";
    if (value >= 300 && value < 400) return "300 - 399 L (Refrigerators)";
    if (value >= 400) return "400 L & Above (Refrigerators)";
  }

  if (applianceType === "Dishwasher") {
    return `${value} Place (Dishwashers)`;
  }

  if (applianceType === "Geyser") {
    if (value < 6) return "Below 6 L (Geysers)";
    if (value >= 10 && value < 14) return "10 - 14 L (Geysers)";
    if (value >= 15 && value < 24) return "15 - 24 L (Geysers)";
    if (value >= 25) return "25 L & Above (Geysers)";
  }

  return "";
};




const LargeApplianceProducts = ({ filters }) => {
  const filteredProducts = products.filter((product) => {

    const brandMatch = filters.brand.length === 0 || filters.brand.includes(product.brand);
    const capacityMatch = filters.capacity.length === 0 || filters.capacity.includes (getCapacityBucket (product.capacityValue, product.applianceType));
    const applianceTypeMatch = filters.applianceType.length === 0 || filters.applianceType.includes(product.applianceType);
    const priceMatch = !filters.price || product.price <= filters.price;
    return (
      brandMatch && 
      applianceTypeMatch &&
      capacityMatch &&
      priceMatch   
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
                  {product.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={product.name}
                      className="w-60 h-60 object-contain flex-shrink-0"
                    />
                  ))}
                </div></Link>

              <h3 className="text-sm font-medium mt-2">{product.brand} {product.name}</h3>

              <p className="text-green-600 font-semibold">₹{product.price.toLocaleString()}</p>

              {/* Appliance Specs */}
              <div className="text-sm mt-2 grid grid-cols-[90px_1fr] gap-y-2">

                <span className="font-medium">Brand:</span><span>{product.brand}</span>

                {product.capacityValue && product.capacityUnit && (
                  <>
                    <span className="font-medium">Capacity:</span>
                    <span>{product.capacityValue} {product.capacityUnit}</span>
                  </>
                )}

                {product.features && (
                  <>
                    <span className="font-medium">Features:</span>
                    <span>{product.features}</span>
                  </>
                )}

              </div>
            </div>
          ))}
        </div>
    </>
  );
};

export default LargeApplianceProducts;
