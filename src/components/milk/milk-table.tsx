"use client"

import { ColumnDef } from "@tanstack/react-table"

import useDataList from "@/hooks/useDataList"
import useStore from "@/store/useStore"
import SelectTable from "@/components/ui/select-table"
import Table from "@/components/ui/table"

import MilkForm from "./milk-form"

export default function MilkTable() {
  const { changeMilkStatus, milkStatus } = useStore()
  const url = "/api/milk/get"
  const queries = []
  milkStatus !== "all" && queries.push(`status=${milkStatus}`)

  const { data, loading, error, mutate } = useDataList({ url, queries })
  console.log({ data })

  const statusOptions = [
    { name: "Aktif", value: "active", bgColor: "bg-[#E1F7E8]" },
    { name: "Non-Aktif", value: "inactive", bgColor: "bg-[#FFE2DC]" },
  ]

  const columns: ColumnDef<any, any>[] = [
    { header: "No Eartag", accessorKey: "animal_id.eartag_code" },
    { header: "Jenis", accessorKey: "animal_id.type" },
    { header: "Asal", accessorKey: "animal_id.origin" },
    { header: "Berat", accessorKey: "animal_id.weight" },
    { header: "Usia", accessorKey: "animal_id.age" },
    {
      header: "Susu",
      accessorKey: "amount",
      cell: (data) => `${data.getValue() !== 0 ? data.getValue() + " L" : "0"}`,
    },
    {
      header: "Status",
      accessorKey: "animal_id.status",
      cell: (data) => (
        <SelectTable
          value={data.getValue()}
          options={statusOptions}
          triggerClassName={`${statusOptions.find(
            (i) => i.value === data.getValue()
          )?.bgColor!} font-semibold text-neutral-4`}
          onChange={(value) => {
            changeMilkStatus(data.row.original.animal_id._id, value)
            mutate()
          }}
        />
      ),
    },
    {
      header: "Aksi",
      accessorKey: "animal_id._id",
      cell: (data) => (
        <MilkForm formType="edit" currentValues={data.row.original} />
      ),
    },
  ]

  return (
    <Table isLoading={loading} data={data} columns={columns} fixedCol={2} />
  )
}