import React, { useState } from "react";

import '../../style.css'
import LargeAppliancesFilter from "./LargeAppliancesFilter";
import LargeApplianceProducts from "./LargeApplianceProducts";

const LargeAppliances = () =>{
    const [filters, setFilters] = useState({
        applianceType: [],
        capacity: [], 
        brand: [],
        price: "",
        sort: "none"
    });
    return(
        <>
        <section className="p-4 font-bold text-2xl">Large Appliances</section>
        
        <section className="Electronics-section">
            <div className="Electronics-bars flex gap-4 p-4">

            <LargeAppliancesFilter filters={filters} setFilters={setFilters} />

            <LargeApplianceProducts filters={filters} />

            </div>
        </section>
        </>
    )
}

export default LargeAppliances