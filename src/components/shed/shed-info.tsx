"use client"

import useShedDetail from "@/hooks/useShedDetail"
import Card from "@/components/ui/card"

import ShedDetailForm from "./shed-detail-form"
import ShedInfoFilter from "./shed-info-filter"
import ShedInfoTable from "./shed-info-table"

interface IProps {
  options: any
}

export default function ShedInfo({ options }: IProps) {
  const { data, loading } = useShedDetail()

  const cardList = [
    { title: "Berat", content: `${data?.average_weight ?? 0} kg` },
    { title: "Range Usia", content: `${data?.average_age ?? 0} bulan` },
    { title: "Berat Pakan", content: `${data?.feed_weight ?? 0} kg` },
  ]

  return (
    <>
      <div className="mb-4 flex gap-3 py-5 md:mb-8 md:gap-8">
        {cardList?.map((item, idx) => (
          <Card key={idx} className="w-44 p-3 md:p-6">
            <h3 className="mb-4 text-xs font-semibold text-primary-4 md:mb-7 md:text-base">
              {item.title}
            </h3>
            <p className="font-medium text-neutral-5">
              {!loading && item.content}
            </p>
          </Card>
        ))}
      </div>
      {/* HISTORY KANDANG */}
      {data && (
        <div className="space-y-5">
          <h1 className="text-2xl font-semibold text-neutral-5">
            History Kandang
            <span className="text-primary-5"> #{data?.code}</span>
          </h1>
          <div className="flex flex-col-reverse justify-between gap-3 md:flex-row md:items-center">
            <ShedInfoFilter options={options} />
            <ShedDetailForm options={options} />
          </div>
          <ShedInfoTable />
        </div>
      )}
    </>
  )
}