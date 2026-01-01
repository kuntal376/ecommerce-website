import React, { useState } from "react";
import WomenTopWearFilter from "./WomenTopWearFilter";
import WomenTopWearProducts from "./WomenTopWearProducts";
import "../../style.css";

const WomenTopWear = () => {
  const [filters, setFilters] = useState({
    dressType: [],
    fabric: [],
    brand: [],
    sleeve: [],
    occasion: [],
    price: "",
    sort: "none"
  });

  return (
    <>
      <section className="p-4 font-bold text-2xl">
        Women's Top-Wear
      </section>

      <section className="Fashion-section">
        <div className="Fashion-bars flex gap-4 p-4">

          <WomenTopWearFilter filters={filters} setFilters={setFilters} />

          <WomenTopWearProducts filters={filters} />

        </div>
      </section>
    </>
  );
};

export default WomenTopWear;
