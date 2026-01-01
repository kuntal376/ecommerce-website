import React, { useState } from "react";
import WomenFootwearFilter from "./WomenFootwearFilter";
import WomenFootwearProducts from "./WomenFootwearProducts";
import "../../style.css";

const WomenFootwear = () => {
  const [filters, setFilters] = useState({
    type: [],
    occasion:[],
    material: [],
    brand: [],
    price: "",
    sort: "none"
  });

  return (
    <>
      <section className="p-4 font-bold text-2xl">
        Women's Footwear
      </section>

      <section className="Fashion-section">
        <div className="Fashion-bars flex gap-4 p-4">

          <WomenFootwearFilter filters={filters} setFilters={setFilters} />

          <WomenFootwearProducts filters={filters} />

        </div>
      </section>
    </>
  );
};

export default WomenFootwear;
