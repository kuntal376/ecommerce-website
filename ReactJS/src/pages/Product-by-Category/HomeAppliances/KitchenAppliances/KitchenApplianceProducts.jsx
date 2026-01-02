import React from "react";
import { Link } from "react-router-dom";
import KitchenApplianceProductsData from "./KitchenApplianceProductsData";

const products = KitchenApplianceProductsData

const getPowerValue = (power) => {
  if (!power) return 0;
  return parseInt(power.replace("W", ""));
};

const matchPowerRange = (powerValue, ranges) => {
  if (ranges.length === 0) return true;

  return ranges.some((range) => {
    if (range === "Below 500W") return powerValue < 500;
    if (range === "500W - 1000W") return powerValue >= 500 && powerValue <= 1000;
    if (range === "Above 1000W") return powerValue > 1000;
    return false;
  });
};



const KitchenApplianceProducts = ({ filters }) => {
  const filteredProducts = products.filter((product) => {

    const powerValue = getPowerValue(product.power);
    const brandMatch = filters.brand.length === 0 || filters.brand.includes(product.brand);
    const capacityMatch = filters.capacity.length === 0 || filters.capacity.includes(product.capacity);
    const applianceTypeMatch = filters.applianceType.length === 0 || filters.applianceType.includes(product.applianceType);
    const priceMatch = !filters.price || product.price <= filters.price;
    const powerMatch = matchPowerRange(powerValue,filters.power);

    return (
      brandMatch && 
      applianceTypeMatch &&
      powerMatch &&
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

                <span className="font-medium">Power:</span><span>{product.power}</span>

                {product.capacity && (
                  <>
                    <span className="font-medium">Capacity:</span>
                    <span>{product.capacity}</span>
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

export default KitchenApplianceProducts;
