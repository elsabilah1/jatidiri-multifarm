"use client"

import { categoryTitle } from "@/lib/utils"
import useCategoryDetail from "@/hooks/useCategoryDetail"
import { Icons } from "@/components/ui/Icons"

import CategoryCardList from "./category-card-list"
import { setCategories } from "./category-data"
import AddCategoryForm from "./category-form-add"
import CategoryTable from "./category-table"

export default function CategoryContent() {
  const { data, loading } = useCategoryDetail()
  const categories = setCategories(data)

  if (loading)
    return (
      <div className="flex h-20 items-center justify-center">
        <Icons.loader className="animate-spin stroke-primary-4" />
      </div>
    )

  return (
    <>
      <div className="space-y-10">
        {categories?.map(({ cardList, category }, idx) => (
          <div key={idx}>
            <div>
              <h1 className="mb-8 text-2xl font-semibold text-primary-4">
                {categoryTitle(category)}
              </h1>
              <div className="mb-3 flex flex-col gap-3 md:mb-6 md:flex-row md:items-end md:justify-between">
                <CategoryCardList cardList={cardList} />
                <AddCategoryForm category={category} />
              </div>
            </div>
            <CategoryTable category={category} />
          </div>
        ))}
      </div>
    </>
  )
}
