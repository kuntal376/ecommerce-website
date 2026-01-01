import React, { useState } from "react";
import TabletProducts from "./TabletProducts";
import TabletsFilter from "./TabletsFilter";
import '../../style.css'

const Tablets = () => {
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
      <section className="p-4 font-bold text-2xl">Tablets</section>

      <section className="Electronics-section">
        <div className="Electronics-bars flex gap-4 p-4">

          <TabletsFilter filters={filters} setFilters={setFilters} />

          <TabletProducts filters={filters} />

        </div>
      </section>
    </>
  );
};

export default Tablets;