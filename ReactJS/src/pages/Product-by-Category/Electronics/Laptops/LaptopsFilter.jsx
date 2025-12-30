import React, { useState } from "react";

const LaptopsFilter = ({ filters, setFilters }) => {
  const [open, setOpen] = useState({
    sort: true, 
    storage: false,
    ram: false,
    ramType: false,
    ssd: false,
    hdd: false,
    price: false,
    brand: false,
    processor: false,
    processorBrand: false,
    processorGen: false, 
    graphicsMemory: false,
    gpuSeries: false,
    display: false,
    displaySize: false
  });

  return (
    <>
      <aside className="w-64 h-min bg-white border rounded-md p-4">
        <h2 className="font-semibold text-lg mb-4">Filters</h2>

        {/* Sort By */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, sort: !open.sort })} className="font-medium cursor-pointer flex justify-between">
            Sort By
            <span>{open.sort ? "-" : "+"}</span>
          </h3>

          {open.sort && (
            <div className="mt-2 space-y-1 text-sm">
              {[
                { label: "None", value: "none" },
                { label: "Price: Low to High", value: "price-asc" },
                { label: "Price: High to Low", value: "price-desc" },
              ].map((opt) => (
                <label key={opt.value} className="flex gap-2">
                  <input
                    type="radio"
                    name="sort"
                    checked={filters.sort === opt.value}
                    onChange={() =>
                      setFilters({ ...filters, sort: opt.value })
                    }
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, price: !open.price })} className="font-medium cursor-pointer flex justify-between">
            Price
            <span>{open.price ? "-" : "+"}</span>
          </h3>
          {open.price && (
            <div className="mt-2 space-y-1 text-sm">
              {[20000, 30000, 40000, 50000].map((p) => (
                <label key={p} className="flex gap-2">
                  <input
                    type="radio"
                    name="price"
                    checked={filters.price === p}
                    onChange={() => setFilters({ ...filters, price: p })}
                  />
                  Up to ₹{p.toLocaleString()}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Brand */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, brand: !open.brand })} className="font-medium cursor-pointer flex justify-between">
            Brand
            <span>{open.brand ? "-" : "+"}</span>
          </h3>
          {open.brand && (
            <div className="mt-2 space-y-1 text-sm">
              {["Samsung","Acer","DELL", "ASUS"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.brand.includes(v)}
                    onChange={() => {
                      if (filters.brand.includes(v)) {
                        setFilters({
                          ...filters,
                          brand: filters.brand.filter((x) => x !== v),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          brand: [...filters.brand, v],
                        });
                      }
                    }}
                  />
                  {v}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Display Type */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, display: !open.display })} className="font-medium cursor-pointer flex justify-between">
            Display Type
            <span>{open.display ? "-" : "+"}</span>
          </h3>
          {open.display && (
            <div className="mt-2 space-y-1 text-sm">
              {["LCD", "LED", "OLED"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.display.includes(v)}
                    onChange={() => {
                      if (filters.display.includes(v)) {
                        setFilters({
                          ...filters,
                          display: filters.display.filter((x) => x !== v),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          display: [...filters.display, v],
                        });
                      }
                    }}
                  />
                  {v}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Display Size */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, displaySize: !open.displaySize })} className="font-medium cursor-pointer flex justify-between">
            Display Size
            <span>{open.displaySize ? "-" : "+"}</span>
          </h3>

          {open.displaySize && (
            <div className="mt-2 space-y-1 text-sm">
              {["Below 12 inch", "12 - 12.9 inch", "13 - 13.9 inch", "14 - 14.9 inch", "15 - 15.9 inch", "16 - 17.9 inch", "18 - 20 inch", "Above 20 inch"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.displaySizeRange.includes(v)}
                    onChange={() => {
                      if (filters.displaySizeRange.includes(v)) {
                        setFilters({
                          ...filters,
                          displaySizeRange: filters.displaySizeRange.filter(
                            (x) => x !== v
                          )
                        });
                      } else {
                        setFilters({
                          ...filters,
                          displaySizeRange: [...filters.displaySizeRange, v]
                        });
                      }
                    }}
                  />
                  {v}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* RAM Capacity*/}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, ram: !open.ram })} className="font-medium cursor-pointer flex justify-between">
            RAM Capacity
            <span>{open.ram ? "-" : "+"}</span>
          </h3>
          {open.ram && (
            <div className="mt-2 space-y-1 text-sm">
              {["4 GB", "6 GB", "8 GB", "12 GB", "16 GB", "24 GB", "32 GB", "64 GB"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.ram.includes(v)}
                    onChange={() => {
                      if (filters.ram.includes(v)) {
                        setFilters({
                          ...filters,
                          ram: filters.ram.filter((x) => x !== v),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          ram: [...filters.ram, v],
                        });
                      }
                    }}
                  />
                  {v}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* RAM Type */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, ramType: !open.ramType })} className="font-medium cursor-pointer flex justify-between">
            RAM Type
            <span>{open.ramType ? "-" : "+"}</span>
          </h3>
          {open.ramType && (
            <div className="mt-2 space-y-1 text-sm">
              {["DDR3", "DDR4", "DDR5", "LPDDR4", "LPDDR4X", "LPDDR5", "LPDDR5X"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.ramType.includes(v)}
                    onChange={() => {
                      if (filters.ramType.includes(v)) {
                        setFilters({
                          ...filters,
                          ramType: filters.ramType.filter((x) => x !== v),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          ramType: [...filters.ramType, v],
                        });
                      }
                    }}
                  />
                  {v}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* SSD Storage */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, ssd: !open.ssd })} className="font-medium cursor-pointer flex justify-between">
            SSD Capacity
            <span>{open.ssd ? "-" : "+"}</span>
          </h3>

          {open.ssd && (
            <div className="mt-2 space-y-1 text-sm">
              {["128 GB", "256 GB", "512 GB", "1 TB", "2 TB"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.ssd.includes(v)}
                    onChange={() => {
                      if (filters.ssd.includes(v)) {
                        setFilters({
                          ...filters,
                          ssd: filters.ssd.filter((x) => x !== v),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          ssd: [...filters.ssd, v],
                        });
                      }
                    }}
                  />
                  {v}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* HDD Capacity */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, hdd: !open.hdd })} className="font-medium cursor-pointer flex justify-between">
            HDD Capacity
            <span>{open.hdd ? "-" : "+"}</span>
          </h3>
          {open.hdd && (
            <div className="mt-2 space-y-1 text-sm">
              {["500 GB", "1 TB", "2 TB"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.hdd.includes(v)}
                    onChange={() => {
                      if (filters.hdd.includes(v)) {
                        setFilters({
                          ...filters,
                          hdd: filters.hdd.filter((x) => x !== v),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          hdd: [...filters.hdd, v],
                        });
                      }
                    }}
                  />
                  {v}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Processor Brand */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, processorBrand: !open.processorBrand })} className="font-medium cursor-pointer flex justify-between">
            Processor Brand
            <span>{open.processorBrand ? "-" : "+"}</span>
          </h3>

          {open.processorBrand && (
            <div className="mt-2 space-y-1 text-sm">
              {["Intel", "AMD"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.processorBrand.includes(v)}
                    onChange={() => {
                      if (filters.processorBrand.includes(v)) {
                        setFilters({
                          ...filters,
                          processorBrand: filters.processorBrand.filter(
                            (x) => x !== v
                          ),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          processorBrand: [...filters.processorBrand, v],
                        });
                      }
                    }}
                  />
                  {v}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Processor */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, processor: !open.processor })} className="font-medium cursor-pointer flex justify-between">
            Processor
            <span>{open.processor ? "-" : "+"}</span>
          </h3>
          {open.processor && (
            <div className="mt-2 space-y-1 text-sm">
              {["Core i3", "Core i5", "Core i7", "Core i9", "Ryzen 3 Dual Core", "Ryzen 5 Quad Core", "Ryzen 7 Quad Core"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.processor.includes(v)}
                    onChange={() => {
                      if (filters.processor.includes(v)) {
                        setFilters({
                          ...filters,
                          processor: filters.processor.filter((x) => x !== v),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          processor: [...filters.processor, v],
                        });
                      }
                    }}
                  />
                  {v}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Processor Generation */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, processorGen: !open.processorGen })} className="font-medium cursor-pointer flex justify-between">
            Processor Generation
            <span>{open.processorGen ? "-" : "+"}</span>
          </h3>

          {open.processorGen && (
            <div className="mt-2 space-y-1 text-sm">
              {["5th Gen", "6th Gen", "7th Gen", "8th Gen", "9th Gen", "10th Gen", "11th Gen", "12th Gen", "13th Gen"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.processorGen.includes(v)}
                    onChange={() => {
                      if (filters.processorGen.includes(v)) {
                        setFilters({
                          ...filters,
                          processorGen: filters.processorGen.filter(
                            (x) => x !== v
                          ),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          processorGen: [...filters.processorGen, v],
                        });
                      }
                    }}
                  />
                  {v}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Graphics Memory */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, graphicsMemory: !open.graphicsMemory })} className="font-medium cursor-pointer flex justify-between">
            Graphics Memory
            <span>{open.graphicsMemory ? "-" : "+"}</span>
          </h3>
          {open.graphicsMemory && (
            <div className="mt-2 space-y-1 text-sm">
              {["Integrated Graphics Card", "4 GB", "6 GB", "8 GB", "12 GB", "16 GB", "24 GB"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.graphicsMemory.includes(v)}
                    onChange={() => {
                      if (filters.graphicsMemory.includes(v)) {
                        setFilters({
                          ...filters,
                          graphicsMemory: filters.graphicsMemory.filter(
                            (x) => x !== v
                          ),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          graphicsMemory: [...filters.graphicsMemory, v],
                        });
                      }
                    }}
                  />
                  {v}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Graphic Processor Series */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, gpuSeries: !open.gpuSeries })} className="font-medium cursor-pointer flex justify-between">
            Graphic Processor Series
            <span>{open.gpuSeries ? "-" : "+"}</span>
          </h3>

          {open.gpuSeries && (
            <div className="mt-2 space-y-1 text-sm">
              {["Intel UHD Graphics", "NVIDIA GeForce GT Series","NVIDIA GeForce GTX Series", "NVIDIA GeForce RTX Series", "AMD Radeon Graphics Series", "AMD Radeon R7 Series"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.gpuSeries.includes(v)}
                    onChange={() => {
                      if (filters.gpuSeries.includes(v)) {
                        setFilters({
                          ...filters,
                          gpuSeries: filters.gpuSeries.filter(
                            (x) => x !== v
                          ),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          gpuSeries: [...filters.gpuSeries, v],
                        });
                      }
                    }}
                  />
                  {v}
                </label>
              ))}
            </div>
          )}
        </div>


        {/* Clear All */}
        <button
          onClick={() =>
            setFilters({
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
              sort: "none",
            })
          } className="w-full bg-[#007bff] text-black py-2 rounded-md hover:bg-[#afcbff] mb-2">
          Clear All
        </button>
      </aside>
    </>
  );
};

export default LaptopsFilter;
