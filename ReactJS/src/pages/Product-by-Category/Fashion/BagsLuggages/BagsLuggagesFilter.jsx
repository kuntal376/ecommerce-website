import React, { useState } from "react";

const BagsLuggagesFilter = ({ filters, setFilters }) => {
  const [open, setOpen] = useState({
    sort: true, 
    type: false,
    price: false,
    brand: false,
    material: false,
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

         {/* type */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, type: !open.type })} className="font-medium cursor-pointer flex justify-between">
            Type
            <span>{open.type ? "-" : "+"}</span>
          </h3>
          {open.type && (
            <div className="mt-2 space-y-1 text-sm">
              {["Backpack", "Sling Bag", "Handbag", "Duffle Bag", "Trolley Bag"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.type.includes(v)}
                    onChange={() => {
                      if (filters.type.includes(v)) {
                        setFilters({
                          ...filters,
                          type: filters.type.filter((x) => x !== v),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          type: [...filters.type, v],
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

        {/* material */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, material: !open.material })} className="font-medium cursor-pointer flex justify-between">
            Material
            <span>{open.material ? "-" : "+"}</span>
          </h3>
          {open.material && (
            <div className="mt-2 space-y-1 text-sm">
              {["Jute", "Polyester","Leather"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.material.includes(v)}
                    onChange={() => {
                      if (filters.material.includes(v)) {
                        setFilters({
                          ...filters,
                          material: filters.material.filter((x) => x !== v),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          material: [...filters.material, v],
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
              {[500, 1000].map((p) => (
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
              {["Smart Look", "Malabis", "Lulu & Sky", "KLASSY", "Inte Enterprise"].map((v) => (
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
            setFilters({type: [], material: [], brand: [], price: "", sort: "none"})
          } className="w-full bg-[#007bff] text-black py-2 rounded-md hover:bg-[#afcbff] mb-2">
          Clear All
        </button>
      </aside>
    </>
  );
};

export default BagsLuggagesFilter;
