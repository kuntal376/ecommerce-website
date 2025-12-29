import React, { useState } from "react";

const MobilesFilter = ({ filters, setFilters }) => {
  const [open, setOpen] = useState({
    sort: true, 
    storage: false,
    ram: false,
    price: false,
    brand: false,
    display: false,
  });

  return (
    <>
      <aside className="w-64 bg-white border rounded-md p-4">
        <h2 className="font-semibold text-lg mb-4">Filters</h2>

        {/* Sort By */}
        <div className="mb-4">
          <h3
            onClick={() => setOpen({ ...open, sort: !open.sort })}
            className="font-medium cursor-pointer flex justify-between"
          >
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

        {/* Internal Storage */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, storage: !open.storage })} className="font-medium cursor-pointer flex justify-between">
            Internal Storage
            <span>{open.storage ? "-" : "+"}</span>
          </h3>
          {open.storage && (
            <div className="mt-2 space-y-1 text-sm">
              {["32 GB", "64 GB", "128 GB", "256 GB", "512 GB"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.storage.includes(v)}
                    onChange={() => {
                      if (filters.storage.includes(v)) {
                        setFilters({
                          ...filters,
                          storage: filters.storage.filter((x) => x !== v),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          storage: [...filters.storage, v],
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

        {/* RAM */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, ram: !open.ram })} className="font-medium cursor-pointer flex justify-between">
            RAM
            <span>{open.ram ? "-" : "+"}</span>
          </h3>
          {open.ram && (
            <div className="mt-2 space-y-1 text-sm">
              {["2 GB", "4 GB", "6 GB", "8 GB", "12 GB"].map((v) => (
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

        {/* Price */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, price: !open.price })} className="font-medium cursor-pointer flex justify-between">
            Price
            <span>{open.price ? "-" : "+"}</span>
          </h3>
          {open.price && (
            <div className="mt-2 space-y-1 text-sm">
              {[10000, 20000, 30000, 40000, 50000].map((p) => (
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
              {["Samsung", "Realme", "Redmi", "OnePlus"].map((v) => (
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
              {["HD+ IPS LCD","PLS LCD","FHD+ LCD", "AMOLED", "Super AMOLED", "Super AMOLED Plus"].map((v) => (
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

        {/* Clear All */}
        <button
          onClick={() =>
            setFilters({ram: [], storage: [], brand: [], display: [], price: "", sort: "none",})
          } className="w-full bg-gray-300 text-black py-2 rounded-md hover:bg-gray-400 mb-2">
          Clear All
        </button>
      </aside>
    </>
  );
};

export default MobilesFilter;
