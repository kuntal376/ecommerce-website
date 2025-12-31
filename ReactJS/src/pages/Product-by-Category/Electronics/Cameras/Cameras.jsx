import React, { useState } from "react";
import CamerasFilter from "./CamerasFilter";
import CameraProducts from "./CameraProducts";
import '../../style.css'

const Cameras = () =>{
    const [filters, setFilters] = useState({
        brand: [],
        videoResolution: [],
        shutterSpeed: [],
        effectivePixelsRange: [],   
        price: "",
        sort: "none"
    });
    return(
        <>
        <section className="p-4 font-bold text-2xl">Cameras</section>

        <section className="Electronics-section">
            <div className="Electronics-bars flex gap-4 p-4">

            <CamerasFilter filters={filters} setFilters={setFilters} />

            <CameraProducts filters={filters} />

            </div>
        </section>


        </>
    )
}

export default Cameras