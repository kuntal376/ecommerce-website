import React, { useState } from "react";

const MenTopWearFilter = ({ filters, setFilters }) => {
  const [open, setOpen] = useState({
    sort: true, 
    fit: false,
    price: false,
    dressType: false,
    brand: false,
    closure: false,
    fabric: false,
    sleeve: false,
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
            Dress Type
            <span>{open.dressType ? "-" : "+"}</span>
          </h3>
          {open.dressType && (
            <div className="mt-2 space-y-1 text-sm">
              {["Shirt", "T-Shirt", "Blazer","Kurta", "Jacket"].map((v) => (
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
              {["Cotton", "Polyester",].map((v) => (
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
              {["KENI", "DEEMOON", "VeBNoR", "HUMJOLI", "DIMMY", "GOURI", "MOTREX"].map((v) => (
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

        {/* sleeve Type */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, sleeve: !open.sleeve })} className="font-medium cursor-pointer flex justify-between">
            Sleeve Length
            <span>{open.sleeve ? "-" : "+"}</span>
          </h3>
          {open.sleeve && (
            <div className="mt-2 space-y-1 text-sm">
              {["Full Sleeve","Half Sleeve",].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.sleeve.includes(v)}
                    onChange={() => {
                      if (filters.sleeve.includes(v)) {
                        setFilters({
                          ...filters,
                          sleeve: filters.sleeve.filter((x) => x !== v),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          sleeve: [...filters.sleeve, v],
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

        {/* closure Type */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, closure: !open.closure })} className="font-medium cursor-pointer flex justify-between">
            Closure Type
            <span>{open.closure ? "-" : "+"}</span>
          </h3>
          {open.closure && (
            <div className="mt-2 space-y-1 text-sm">
              {["Buttoned","Zipped","None"].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.closure.includes(v)}
                    onChange={() => {
                      if (filters.closure.includes(v)) {
                        setFilters({
                          ...filters,
                          closure: filters.closure.filter((x) => x !== v),
                        });
                      } else {
                        setFilters({
                          ...filters,
                          closure: [...filters.closure, v],
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
            Fit Type
            <span>{open.fit ? "-" : "+"}</span>
          </h3>
          {open.fit && (
            <div className="mt-2 space-y-1 text-sm">
              {["Regular","Over-sized"].map((v) => (
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
            setFilters({dressType: [], fabric: [], brand: [], sleeve: [], closure: [], fit:[], price: "", sort: "none"})
          } className="w-full bg-[#007bff] text-black py-2 rounded-md hover:bg-[#afcbff] mb-2">
          Clear All
        </button>
      </aside>
    </>
  );
};

export default MenTopWearFilter;