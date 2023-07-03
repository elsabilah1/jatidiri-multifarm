"use client"

import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"

import MilkForm from "./milk-form"

export default function MilkHeader() {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-5">
          Penghasilan Susu
        </h1>
        <div className="flex items-center gap-2">
          <MilkForm formType="add" />
          <Button
            variant="outline"
            className="px-3"
            onClick={() => window.open(`/api/milk/download`, "_blank")}
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  )
}