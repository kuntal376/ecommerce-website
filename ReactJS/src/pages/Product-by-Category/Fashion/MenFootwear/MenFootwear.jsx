import React, { useState } from "react";
import MenFootwearFilter from "./MenFootwearFilter";
import MenFootwearProducts from "./MenFootwearProducts";
import "../../style.css";

const MenFootwear = () => {
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
        Men's Footwear
      </section>

      <section className="Fashion-section">
        <div className="Fashion-bars flex gap-4 p-4">

          <MenFootwearFilter filters={filters} setFilters={setFilters} />

          <MenFootwearProducts filters={filters} />

        </div>
      </section>
    </>
  );
};

export default MenFootwear;
