'use client'
import { formatRupiah } from '@/lib/utils'
import { IHpp } from '@/store/hpp'
import { ColumnDef } from '@tanstack/react-table'
import { FC, useState } from 'react'
import EditHppForm from '../form/EditHppForm'
import { Button, Table } from '../shared'
import SelectTable from '../shared/SelectTable'

const statusOptions = [
  { name: 'Terjual', value: 'sold', bgColor: 'bg-[#FFE2DC]' },
  { name: 'Tersedia', value: 'available', bgColor: 'bg-[#E1F7E8]' },
  { name: 'Mati', value: 'died', bgColor: 'bg-[#BFC4C6] bg-opacity-20' },
]

interface HppTableProps {
  data: IHpp[]
}

const HppTable: FC<HppTableProps> = ({ data }) => {
  const [isOpen, closeModal] = useState(false)
  const [eartagCode, setEartagCode] = useState('')
  // const [status, setStatus] = useState(statusOptions[0])

  // const changeStatusHandler = (value: any) => {
  //   setStatus(value)
  // }

  const editHandler = (value: string) => {
    setEartagCode(value)
    closeModal(true)
  }

  const columns: ColumnDef<any, any>[] = [
    { header: 'No Eartag', accessorKey: 'eartag_code' },
    { header: 'Jenis', accessorKey: 'type' },
    { header: 'Asal', accessorKey: 'origin' },
    { header: 'Berat', accessorKey: 'weight' },
    { header: 'Usia', accessorKey: 'age' },
    {
      header: 'Harga Beli',
      accessorKey: 'purchase_price',
      cell: (data) => formatRupiah(data.getValue()),
    },
    {
      header: 'Harga Pakan',
      accessorKey: 'feed_price',
      cell: (data) => formatRupiah(data.getValue()),
    },
    {
      header: 'Harga Lainnya',
      accessorKey: 'other_price',
      cell: (data) => formatRupiah(data.getValue()),
    },
    {
      header: 'HPP',
      accessorKey: 'hpp',
      cell: (data) => formatRupiah(data.getValue()),
    },
    {
      header: 'Harga Jual',
      accessorKey: 'selling_price',
      cell: (data) => formatRupiah(data.getValue()),
    },
    {
      header: 'Status',
      accessorKey: 'status.value',
      cell: (data) => (
        <SelectTable
          value={data.getValue()}
          options={statusOptions}
          triggerBackground={
            statusOptions.find((i) => i.value === data.getValue())?.bgColor!
          }
        />
      ),
    },
    {
      header: 'Aksi',
      accessorKey: 'eartag_code',
      cell: (data) => (
        <Button
          variant="edit"
          size="xs"
          onClick={() => editHandler(data.getValue())}
        />
      ),
    },
  ]

  return (
    <>
      <EditHppForm
        eartag_code={eartagCode}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <Table isLoading={false} data={data} columns={columns} fixedCol={2} />
    </>
  )
}

export default HppTable