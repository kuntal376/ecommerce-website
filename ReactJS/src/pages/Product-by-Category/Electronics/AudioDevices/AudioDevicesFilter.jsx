import React, { useState } from "react";

const AudioDevicesFilter = ({ filters, setFilters }) => {
  const [open, setOpen] = useState({
    category: false,
    sort: true, 
    connectivity: false,
    noiseCancellation: false,
    price: false,
    brand: false,
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
              {[1000, 2000, 3000, 4000, 5000, 6000, 7000, 10000].map((p) => (
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

        {/* Category */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, category: !open.category })} className="font-medium cursor-pointer flex justify-between">
            Category
            <span>{open.category ? "-" : "+"}</span>
          </h3>

          {open.category && (
            <div className="mt-2 space-y-1 text-sm">
              {["Headphones", "Earbuds", "Earphones", "Speaker",].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.category.includes(v)}
                    onChange={() => {
                      if (filters.category.includes(v)) {
                        setFilters({
                          ...filters,
                          category: filters.category.filter((x) => x !== v),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          category: [...filters.category, v],
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


        {/* Connectivity */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, connectivity: !open.connectivity })} className="font-medium cursor-pointer flex justify-between">
            Connectivity
            <span>{open.connectivity ? "-" : "+"}</span>
          </h3>

          {open.connectivity && (
            <div className="mt-2 space-y-1 text-sm">
              {["Wired", "Bluetooth"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.connectivity.includes(v)}
                    onChange={() => {
                      if (filters.connectivity.includes(v)) {
                        setFilters({
                          ...filters,
                          connectivity: filters.connectivity.filter(
                            (x) => x !== v
                          ),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          connectivity: [...filters.connectivity, v],
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

        {/* Noise Cancellation */}
        <div className="mb-4">
          <h3
            onClick={() =>
              setOpen({ ...open, noiseCancellation: !open.noiseCancellation })
            }
            className="font-medium cursor-pointer flex justify-between"
          >
            Noise Cancellation
            <span>{open.noiseCancellation ? "-" : "+"}</span>
          </h3>

          {open.noiseCancellation && (
            <div className="mt-2 space-y-1 text-sm">
              {["ANC", "ENC", "Passive", "None"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.noiseCancellation.includes(v)}
                    onChange={() => {
                      if (filters.noiseCancellation.includes(v)) {
                        setFilters({
                          ...filters,
                          noiseCancellation: filters.noiseCancellation.filter(
                            (x) => x !== v
                          ),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          noiseCancellation: [
                            ...filters.noiseCancellation,
                            v,
                          ],
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
        

        {/* Brand */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, brand: !open.brand })} className="font-medium cursor-pointer flex justify-between">
            Brand
            <span>{open.brand ? "-" : "+"}</span>
          </h3>
          {open.brand && (
            <div className="mt-2 space-y-1 text-sm">
              {["Sony", "JBL", "boAt", "Realme"].map((v) => (
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



        {/* Clear All */}
        <button
          onClick={() =>
            setFilters({category: [], connectivity: [],noiseCancellation: [], brand: [], price: "", sort: "none",})
          } className="w-full bg-[#007bff] text-black py-2 rounded-md hover:bg-[#afcbff] mb-2">
          Clear All
        </button>
      </aside>
    </>
  );
};

export default AudioDevicesFilter;
