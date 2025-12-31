import React, { useState } from "react";
import MenTopWearFilter from "./MenTopWearFilter";
import MenTopWearProducts from "./MenTopWearProducts";
import "../../style.css";

const MenTopWear = () => {
  const [filters, setFilters] = useState({
    dressType: [],
    fabric: [],
    brand: [],
    sleeve: [],
    closure: [],
    fit: [],
    price: "",
    sort: "none"
  });

  return (
    <>
      <section className="p-4 font-bold text-2xl">
        Men's Top-Wear
      </section>

      <section className="Fashion-section">
        <div className="Fashion-bars flex gap-4 p-4">

          <MenTopWearFilter filters={filters} setFilters={setFilters} />

          <MenTopWearProducts filters={filters} />

        </div>
      </section>
    </>
  );
};

export default MenTopWear;
