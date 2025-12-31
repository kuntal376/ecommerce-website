import React, { useState } from "react";

const CamerasFilter = ({ filters, setFilters }) => {
  const [open, setOpen] = useState({
    sort: true, 
    price: false,
    brand: false,
    videoResolution: false,
    effectivePixels: false, 
    shutter: false,
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
              {[40000, 50000, 60000, 70000, 80000, 90000, 100000].map((p) => (
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
              {["Canon", "Sony", "Panasonic","Nikon"].map((v) => (
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

        {/* Video Resolution */}
        <div className="mb-4">
          <h3
            onClick={() => setOpen({ ...open, video: !open.video })}
            className="font-medium cursor-pointer flex justify-between"
          >
            Video Resolution
            <span>{open.video ? "-" : "+"}</span>
          </h3>

          {open.video && (
            <div className="mt-2 space-y-1 text-sm">
              {[
                "1280 x 720",
                "1920 x 1080",
                "3328 x 2496",
                "3840 x 2160",
                "4096 x 2160",
                "4896 x 3264",
                "5472 x 3648",
                "6000 x 3164",
                "6240 x 4160",
                "7680 x 4320",
                "8688 x 5792",
              ].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.videoResolution.includes(v)}
                    onChange={() =>
                      setFilters({
                        ...filters,
                        videoResolution: filters.videoResolution.includes(v)
                          ? filters.videoResolution.filter(x => x !== v)
                          : [...filters.videoResolution, v]
                      })
                    }
                  />
                  {v}
                </label>
              ))}
            </div>
          )}
        </div>
        
        {/* Shutter Speed */}
        <div className="mb-4">
          <h3
            onClick={() => setOpen({ ...open, shutter: !open.shutter })}
            className="font-medium cursor-pointer flex justify-between"
          >
            Shutter Speed
            <span>{open.shutter ? "-" : "+"}</span>
          </h3>

          {open.shutter && (
            <div className="mt-2 space-y-1 text-sm">
              {[
                "1/8000 - 60 sec",
                "1/32000 sec",
                "1/16000 sec",
                "1/8000 sec",
                "1/4000 sec",
                "1/4000 - 30 sec",
                "1/8000 - 30 sec",
                "1/4000 - 60 sec"
              ].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.shutterSpeed.includes(v)}
                    onChange={() =>
                      setFilters({
                        ...filters,
                        shutterSpeed: filters.shutterSpeed.includes(v)
                          ? filters.shutterSpeed.filter(x => x !== v)
                          : [...filters.shutterSpeed, v],
                      })
                    }
                  />
                  {v}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Effective Pixels */}
        <div className="mb-4">
          <h3
            onClick={() =>
              setOpen({ ...open, effectivePixels: !open.effectivePixels })
            }
            className="font-medium cursor-pointer flex justify-between"
          >
            Effective Pixels
            <span>{open.effectivePixels ? "-" : "+"}</span>
          </h3>

          {open.effectivePixels && (
            <div className="mt-2 space-y-1 text-sm">
              {[
                "Below 20 MP",
                "20 - 24.9 MP",
                "25 - 29.9 MP",
                "30 - 39.9 MP",
                "40 - 49.9 MP",
                "50 - 59.9 MP",
                "60 - 70 MP",
                "Above 70 MP",
              ].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.effectivePixelsRange.includes(v)}
                    onChange={() =>
                      setFilters({
                        ...filters,
                        effectivePixelsRange:
                          filters.effectivePixelsRange.includes(v)
                            ? filters.effectivePixelsRange.filter(x => x !== v)
                            : [...filters.effectivePixelsRange, v],
                      })
                    }
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
            setFilters({brand: [], videoResolution: [], shutterSpeed:[],effectivePixelsRange: [], price: "", sort: "none",})
          } className="w-full bg-[#007bff] text-black py-2 rounded-md hover:bg-[#afcbff] mb-2">
          Clear All
        </button>
      </aside>
    </>
  );
};

export default CamerasFilter;
