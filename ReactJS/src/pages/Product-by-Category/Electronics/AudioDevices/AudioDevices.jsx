import React, { useState } from "react";
import '../../style.css'
import AudioDevicesFilter from "./AudioDevicesFilter";
import AudioDeviceProducts from "./AudioDeviceProducts";


const AudioDevices = () =>{
    const [filters, setFilters] = useState({
        category: [],
        connectivity: [], 
        brand: [],
        noiseCancellation: [],
        price: "",
        sort: "none"
    });
    return(
        <>
        <section className="p-4 font-bold text-2xl">WearableTechnology</section>

        <section className="Electronics-section">
            <div className="Electronics-bars flex gap-4 p-4">

            <AudioDevicesFilter filters={filters} setFilters={setFilters} />

            <AudioDeviceProducts filters={filters} /> 

            </div>
        </section>


        </>
    )
}

export default AudioDevices