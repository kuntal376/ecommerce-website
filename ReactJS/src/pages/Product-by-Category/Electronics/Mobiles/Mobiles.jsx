import React, { useState } from "react";
import MobilesFilter from "./MobilesFilter";
import MobileProducts from "./MobileProducts";
import "../../style.css";

const Mobiles = () => {
  const [filters, setFilters] = useState({
    ram: [],
    storage: [],
    brand: [],
    display: [],
    price: "",
    sort: "none"
  });

  return (
    <>
      <section className="p-4 font-bold text-2xl">
        Mobiles
      </section>

      <section className="Electronics-section">
        <div className="Electronics-bars flex gap-4 p-4">

          <MobilesFilter filters={filters} setFilters={setFilters} />

          <MobileProducts filters={filters} />

        </div>
      </section>
    </>
  );
};

export default Mobiles;
