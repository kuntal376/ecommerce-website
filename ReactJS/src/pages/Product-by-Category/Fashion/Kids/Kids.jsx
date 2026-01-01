import React, { useState } from "react";
import KidsFilter from "./KidsFilter";
import KidsProducts from "./KidsProducts";
import "../../style.css";

const Kids = () => {
  const [filters, setFilters] = useState({
    dressType: [],
    fabric: [],
    brand: [],
    price: "",
    sort: "none"
  });

  return (
    <>
      <section className="p-4 font-bold text-2xl">
        Kids' Section
      </section>

      <section className="Fashion-section">
        <div className="Fashion-bars flex gap-4 p-4">

          <KidsFilter filters={filters} setFilters={setFilters} />

          <KidsProducts filters={filters} />

        </div>
      </section>
    </>
  );
};

export default Kids;
