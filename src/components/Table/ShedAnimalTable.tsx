'use client'
import { longDateFormatter } from '@/utils/formatDate'
import Table from './Table'

interface IProps {
  data: any
}

export default function ShedAnimalTable({ data }: IProps) {
  return <Table data={data} columns={columns} fixedCol={2} />
}

const columns = [
  {
    header: 'No',
    cell: ({ row }: any) => row.index + 1,
  },
  {
    header: 'Tgl Tiba',
    accessorKey: 'arrival_at',
    cell: ({ value }: any) => longDateFormatter(value),
  },
  {
    header: 'No Eartag',
    accessorKey: 'eartag_code',
  },
  {
    header: 'Keterangan',
    accessorKey: 'description',
  },
  {
    header: 'Pindah Kandang',
    cell: () => <div>dropdown</div>,
  },
]
