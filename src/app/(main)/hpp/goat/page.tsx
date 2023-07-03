import HppFilter from "@/components/hpp/hpp-filter"
import HppHeader from "@/components/hpp/hpp-header"
import HppTable from "@/components/hpp/hpp-table"
import StoreInitializer from "@/components/store-initializer"

export const metadata = {
  title: "HPP",
}

export default function Page() {
  return (
    <>
      <StoreInitializer data={{ animal: "goat" }} />
      <HppHeader animal_type="goat" />
      <HppFilter />
      <HppTable />
    </>
  )
}
