import React, { useState } from "react";

const SmallAppliancesFilter = ({ filters, setFilters }) => {
  const [open, setOpen] = useState({
    sort: true, 
    price: false,
    brand: false,
    applianceType: true,
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
              {[1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000].map((p) => (
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
            Appliance Type <span>{open.applianceType ? "-" : "+"}</span>
          </h3>
          {open.applianceType && (
            <div className="mt-2 space-y-1 text-sm overflow-auto h-40">
              {[
                "Trimmer",
                "Hair Dryer",
                "Hair Straightener",
                "Vacuum Cleaner",
                "Steam Iron",
                "Dry Iron",
                "Garment Steamer",
                "Electric Hot Water Bag",
                "Weighing Scale",
                "BP Monitor",
                "Pulse Oximeter",].map((v) => (
                <label key={v} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={filters.applianceType.includes(v)}
                    onChange={() =>
                      setFilters({
                        ...filters,
                        applianceType: filters.applianceType.includes(v)
                          ? filters.applianceType.filter((x) => x !== v)
                          : [...filters.applianceType, v],
                      })
                    }
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
              {[ "Philips", "Havells", "AGARO","CRETO","Dr Trust"].map((v) => (
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
            setFilters({
              brand: [],
              applianceType: [], 
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

export default SmallAppliancesFilter;
