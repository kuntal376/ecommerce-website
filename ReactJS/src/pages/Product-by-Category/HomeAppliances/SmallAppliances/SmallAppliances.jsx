import React, { useState } from "react";

import '../../style.css'
import SmallAppliancesFilter from "./SmallAppliancesFilter";
import SmallApplianceProducts from "./SmallApplianceProducts";

const SmallAppliances = () =>{
    const [filters, setFilters] = useState({
        applianceType: [],
        brand: [],
        price: "",
        sort: "none"
    });
    return(
        <>
        <section className="p-4 font-bold text-2xl">Small Appliances</section>
        
        <section className="Electronics-section">
            <div className="Electronics-bars flex gap-4 p-4">

            <SmallAppliancesFilter filters={filters} setFilters={setFilters} />

            <SmallApplianceProducts filters={filters} />

            </div>
        </section>
        </>
    )
}

export default SmallAppliances