import React, { useState } from "react";
import WomenBottomWearFilter from "./WomenBottomWearFilter";
import WomenBottomWearProducts from "./WomenBottomWearProducts";
import "../../style.css";

const WomenBottomWear = () => {
  const [filters, setFilters] = useState({
    dressType: [],
    occasion:[],
    fabric: [],
    brand: [],
    fit: [],
    price: "",
    sort: "none"
  });

  return (
    <>
      <section className="p-4 font-bold text-2xl">
        Women's Bottom-Wear
      </section>

      <section className="Fashion-section">
        <div className="Fashion-bars flex gap-4 p-4">

          <WomenBottomWearFilter filters={filters} setFilters={setFilters} />

          <WomenBottomWearProducts filters={filters} />

        </div>
      </section>
    </>
  );
};

export default WomenBottomWear;
