import React, { useState } from "react";
import KitchenAppliancesFilter from "./KitchenAppliancesFilter";
import KitchenApplianceProducts from "./KitchenApplianceProducts";
import '../../style.css'

const KitchenAppliances = () =>{
    const [filters, setFilters] = useState({
        applianceType: [],
        power: [],
        capacity: [], 
        brand: [],
        price: "",
        sort: "none"
    });
    return(
        <>
        <section className="p-4 font-bold text-2xl">Kitchen Appliances</section>
        
        <section className="Electronics-section">
            <div className="Electronics-bars flex gap-4 p-4">

            <KitchenAppliancesFilter filters={filters} setFilters={setFilters} />

            <KitchenApplianceProducts filters={filters} />

            </div>
        </section>
        </>
    )
}

export default KitchenAppliances