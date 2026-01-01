import React, { useState } from "react";
import BagsLuggagesFilter from "./BagsLuggagesFilter";
import BagsLuggagesProducts from "./BagsLuggagesProducts";
import "../../style.css";

const BagsLuggages = () => {
  const [filters, setFilters] = useState({
    type: [],
    material: [],
    brand: [],
    price: "",
    sort: "none"
  });

  return (
    <>
      <section className="p-4 font-bold text-2xl">
        Bags & Luggages
      </section>

      <section className="Fashion-section">
        <div className="Fashion-bars flex gap-4 p-4">

          <BagsLuggagesFilter filters={filters} setFilters={setFilters} />

          <BagsLuggagesProducts filters={filters} />

        </div>
      </section>
    </>
  );
};

export default BagsLuggages;
