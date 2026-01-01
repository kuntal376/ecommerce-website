import React, { useState } from "react";
import MenBottomWearFilter from "./MenBottomWearFilter";
import MenBottomWearProducts from "./MenBottomWearProducts";
import "../../style.css";

const MenBottomWear = () => {
  const [filters, setFilters] = useState({
    dressType: [],
    fabric: [],
    brand: [],
    fit: [],
    price: "",
    sort: "none"
  });

  return (
    <>
      <section className="p-4 font-bold text-2xl">
        Men's Bottom-Wear
      </section>

      <section className="Fashion-section">
        <div className="Fashion-bars flex gap-4 p-4">

          <MenBottomWearFilter filters={filters} setFilters={setFilters} />

          <MenBottomWearProducts filters={filters} />

        </div>
      </section>
    </>
  );
};

export default MenBottomWear;
