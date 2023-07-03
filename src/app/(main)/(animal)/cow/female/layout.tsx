import { PropsWithChildren } from "react"

import Header from "@/components/animal/header"
import StoreInitializer from "@/components/store-initializer"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <StoreInitializer data={{ animal: "cow", gender: "female" }} />
      <Header />
      {children}
    </>
  )
}