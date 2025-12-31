import React, { useState } from "react";

const MenTopWearFilter = ({ filters, setFilters }) => {
  const [open, setOpen] = useState({
    sort: true, 
    dressType: false,
    fit: false,
    price: false,
    brand: false,
    fabric: false,
  });

  return (
    <>
      <aside className="w-64 bg-white border rounded-md p-4 h-min">
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

         {/* dressType */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, dressType: !open.dressType })} className="font-medium cursor-pointer flex justify-between">
            Type
            <span>{open.dressType ? "-" : "+"}</span>
          </h3>
          {open.dressType && (
            <div className="mt-2 space-y-1 text-sm">
              {["Jeans", "Cargo", "Pyjama", "Dhoti", "Trousers"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.dressType.includes(v)}
                    onChange={() => {
                      if (filters.dressType.includes(v)) {
                        setFilters({
                          ...filters,
                          dressType: filters.dressType.filter((x) => x !== v),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          dressType: [...filters.dressType, v],
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

        {/* fabric */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, fabric: !open.fabric })} className="font-medium cursor-pointer flex justify-between">
            Fabric Type
            <span>{open.fabric ? "-" : "+"}</span>
          </h3>
          {open.fabric && (
            <div className="mt-2 space-y-1 text-sm">
              {["Cotton", "Polyester","Denim"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.fabric.includes(v)}
                    onChange={() => {
                      if (filters.fabric.includes(v)) {
                        setFilters({
                          ...filters,
                          fabric: filters.fabric.filter((x) => x !== v),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          fabric: [...filters.fabric, v],
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
              {[500, 1000, 2000].map((p) => (
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
              {["Wrangler", "cat look", "JOCKEY", "Shreya Trend", "Metronaut", "Manvik", "TANIMANI", "House of Common"].map((v) => (
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

        {/* fit Type */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, fit: !open.fit })} className="font-medium cursor-pointer flex justify-between">
            Fit
            <span>{open.fit ? "-" : "+"}</span>
          </h3>
          {open.fit && (
            <div className="mt-2 space-y-1 text-sm">
              {["Loose","Slim","Regular", "Straight"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.fit.includes(v)}
                    onChange={() => {
                      if (filters.fit.includes(v)) {
                        setFilters({
                          ...filters,
                          fit: filters.fit.filter((x) => x !== v),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          fit: [...filters.fit, v],
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
            setFilters({dressType: [], fabric: [], brand: [], fit: [], price: "", sort: "none"})
          } className="w-full bg-[#007bff] text-black py-2 rounded-md hover:bg-[#afcbff] mb-2">
          Clear All
        </button>
      </aside>
    </>
  );
};

export default MenTopWearFilter;
