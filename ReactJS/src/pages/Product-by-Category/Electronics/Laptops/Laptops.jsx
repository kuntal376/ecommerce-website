import React, { useState } from "react";
import LaptopsFilter from "./LaptopsFilter";
import LaptopProducts from "./LaptopProducts";
import '../../style.css'

const Laptops = () =>{
    const [filters, setFilters] = useState({
        ram: [],
        ramType: [],
        ssd: [],
        hdd: [],
        brand: [],
        processor: [],
        processorBrand: [],
        processorGen: [],
        graphicsMemory: [],
        gpuSeries: [],
        display: [],
        displaySizeRange: [],
        price: "",
        sort: "none"
      });

    return(
        <>
            <section className="p-4 font-bold text-2xl">Laptops</section>

            <section className="Electronics-section">
                <div className="Electronics-bars flex gap-4 p-4">

                <LaptopsFilter filters={filters} setFilters={setFilters} />

                <LaptopProducts filters={filters} />

                </div>
            </section>
        </>
    )
}

export default Laptops