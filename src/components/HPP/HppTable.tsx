'use client'
import formatRupiah from '@/utils/formatRupiah'
import { useState } from 'react'
import Button from '../Button'
import Listbox from '../Listbox'
import Table from '../Table/Table'
import EditHppForm from './EditHppForm'

export default function HppTable({ data }: any) {
  const [isOpen, closeModal] = useState(false)
  const [eartagCode, setEartagCode] = useState('')
  const [status, setStatus] = useState(statusOptions[0])

  const changeStatusHandler = (value: any) => {
    setStatus(value)
  }

  const editHandler = (value: string) => {
    setEartagCode(value)
    closeModal(true)
  }

  return (
    <>
      <EditHppForm
        eartagCode={eartagCode}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <Table
        data={data}
        columns={columns(status, changeStatusHandler, editHandler)}
        fixedCol={2}
      />
    </>
  )
}

const statusOptions = [
  { name: 'Terjual', bgColor: 'bg-[#FFE2DC]' },
  { name: 'Tersedia', bgColor: 'bg-[#E1F7E8]' },
  { name: 'Mati', bgColor: 'bg-[#BFC4C6] bg-opacity-20' },
]

const columns = (status: any, changeStatusHandler: any, editHandler: any) => [
  {
    header: 'No',
    cell: ({ row }: any) => row.index + 1,
  },
  {
    header: 'No Eartag',
    accessorKey: 'eartag_code',
  },
  {
    header: 'Jenis',
    accessorKey: 'type',
  },
  {
    header: 'Asal',
    accessorKey: 'origin',
  },
  {
    header: 'Berat',
    accessorKey: 'weight',
  },
  {
    header: 'Usia',
    accessorKey: 'age',
  },
  {
    header: 'Harga Beli',
    accessorKey: 'purchase_price',
    cell: (data: any) => formatRupiah(data.getValue().toString()),
  },
  {
    header: 'Harga Pakan',
    accessorKey: 'feed_price',
    cell: (data: any) => formatRupiah(data.getValue().toString()),
  },
  {
    header: 'Harga Lainnya',
    accessorKey: 'other_price',
    cell: (data: any) => formatRupiah(data.getValue().toString()),
  },
  {
    header: 'HPP',
    accessorKey: 'hpp',
    cell: (data: any) => formatRupiah(data.getValue().toString()),
  },
  {
    header: 'Harga Jual',
    accessorKey: 'selling_price',
    cell: (data: any) => formatRupiah(data.getValue().toString()),
  },
  {
    header: 'Status',
    accessorKey: 'status.name',
    cell: (data: any) => (
      <Listbox
        options={statusOptions}
        value={status}
        onChange={changeStatusHandler}
        className={`${status.bgColor} w-24`}
        optionsClassname="w-24 bg-white"
      />
    ),
  },
  {
    header: 'Aksi',
    accessorKey: 'eartag_code',
    cell: (data: any) => (
      <Button intent="edit" onClick={() => editHandler(data.getValue())} />
    ),
  },
]