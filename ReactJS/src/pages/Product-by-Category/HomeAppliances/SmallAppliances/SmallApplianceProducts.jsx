import React from "react";
import { Link } from "react-router-dom";
import SmallApplianceProductsData from "./SmallApplianceProductsData";

const products = SmallApplianceProductsData


const SmallApplianceProducts = ({ filters }) => {
  const filteredProducts = products.filter((product) => {

    const brandMatch = filters.brand.length === 0 || filters.brand.includes(product.brand);
    const applianceTypeMatch = filters.applianceType.length === 0 || filters.applianceType.includes(product.applianceType);
    const priceMatch = !filters.price || product.price <= filters.price;
    return (
      brandMatch && 
      applianceTypeMatch &&
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
        <div className="h-min grid grid-cols-2 gap-4 flex-1">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border rounded-md p-4 bg-white hover:shadow-lg transition">
              <Link to={product.name}>
                <div className="flex gap-x-8 overflow-auto scrollbar-hide">
                  {product.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={product.name}
                      className="w-90 h-90 object-contain flex-shrink-0"
                    />
                  ))}
                </div></Link>

              <h3 className="text-sm font-medium mt-2">{product.brand} {product.name}</h3>

              <p className="text-green-600 font-semibold">₹{product.price.toLocaleString()}</p>

              {/* Appliance Specs */}
              <div className="text-sm mt-2 grid grid-cols-[90px_1fr] gap-y-2">

                <span className="font-medium">Brand:</span><span>{product.brand}</span>

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

export default SmallApplianceProducts;
