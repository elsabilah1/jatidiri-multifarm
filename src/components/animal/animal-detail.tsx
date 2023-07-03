"use client"

import DateFilter from "../ui/date-filter"
import SelectFilter from "../ui/select-filter"
import DetailTable from "./table-detail"

export default function AnimalDetail() {
  const categoryOpts = [
    { name: "All", value: "all" },
    { name: "Vaksin", value: "vaccine" },
    { name: "Vitamin", value: "vitamin" },
    { name: "Obat Cacing", value: "anthelmintic" },
  ]

  return (
    <div>
      <div className="mb-6 flex gap-5 md:items-center md:gap-3">
        <span className="hidden font-semibold md:block">FILTER:</span>
        <div className="flex flex-1 items-center justify-between gap-3 md:flex-none">
          <div className="rounded border border-[#D9D9D9] px-3 py-2">
            <DateFilter label="" />
          </div>
          <div className="rounded border border-[#D9D9D9] px-3 py-2">
            <SelectFilter
              options={categoryOpts}
              placeholder="kategori"
              noTitle
            />
          </div>
        </div>
      </div>

      <DetailTable />
    </div>
  )
}