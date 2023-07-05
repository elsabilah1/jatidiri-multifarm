import { ColumnDef } from "@tanstack/react-table"

import { longDateFormatter } from "@/lib/utils"

export const shedAnimalcolumns: ColumnDef<any, any>[] = [
  {
    header: "Tgl Tiba",
    accessorKey: "arrival_date",
    cell: (data: any) => longDateFormatter(new Date(data.getValue())),
  },
  { header: "No Eartag", accessorKey: "eartag_code" },
  { header: "Keterangan", accessorKey: "description" },
]