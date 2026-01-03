import React, { useState } from "react";

const all_capacity_options= [
  // Washing Machines
  "6 - 6.9 kg (Washing Machines)",
  "7 - 7.9 kg (Washing Machines)",
  "8 kg & Above (Washing Machines)",

  // Refrigerators
  "Below 200 L (Refrigerators)",
  "200 - 299 L (Refrigerators)",
  "300 - 399 L (Refrigerators)",
  "400 L & Above (Refrigerators)",

  // Dishwashers
  "13 Place (Dishwashers)",
  "14 Place (Dishwashers)",

  // Geysers
  "Below 6 L (Geysers)",
  "10 - 14 L (Geysers)",
  "15 - 24 L (Geysers)",
  "25 L & Above (Geysers)",
];

const LargeAppliancesFilter = ({ filters, setFilters }) => {
  const [open, setOpen] = useState({
    sort: true, 
    price: false,
    brand: false,
    applianceType: true,
    capacity: false,
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
              {[10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000].map((p) => (
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

        {/* Appliance Type */}
        <div className="mb-4">
          <h3 onClick={() => setOpen({ ...open, applianceType: !open.applianceType })} className="font-medium cursor-pointer flex justify-between">
            Appliance Type
            <span>{open.applianceType ? "-" : "+"}</span>
          </h3>
          {open.applianceType && (
            <div className="mt-2 space-y-1 text-sm">
              {["Washing Machine", "Refrigerator", "Dishwasher", "Geyser"].map((type) => (
                <label key={type} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.applianceType.includes(type)}
                    onChange={() => {
                      setFilters({
                        ...filters,
                        applianceType: filters.applianceType.includes(type)
                          ? filters.applianceType.filter((x) => x !== type)
                          : [...filters.applianceType, type],
                      });
                    }}
                  />
                  {type}
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
              {[ "Samsung", "Whirlpool", "Godrej", "Bosch", "Crompton", "Voltas"].map((v) => (
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

        {/* Capacity */}
        <div className="mb-4">
          <h3 onClick={() =>setOpen({ ...open, capacity: !open.capacity })} className="font-medium cursor-pointer flex justify-between">
            Capacity <span>{open.capacity ? "-" : "+"}</span>
          </h3>
          {open.capacity && (
            <div className="mt-2 space-y-1 text-sm max-h-40 overflow-auto">
              {all_capacity_options.map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.capacity.includes(v)}
                    onChange={() =>
                      setFilters({
                        ...filters,
                        capacity: filters.capacity.includes(v)
                          ? filters.capacity.filter((x) => x !== v)
                          : [...filters.capacity, v],
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
            setFilters({
              brand: [],
              applianceType: [], 
              capacity: [],
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

export default LargeAppliancesFilter;
