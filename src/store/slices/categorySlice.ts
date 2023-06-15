import { StateCreator } from "zustand"

import { Delete, Post } from "@/lib/api"
import { toast } from "@/components/ui/Toast"

import { ICategoryState } from "../types"

const createCategorySlice: StateCreator<ICategoryState> = (set, get) => ({
  setCategoryInfo: (data) => {
    set((state) => ({
      ...state,
      feedInfo: data.feedInfo,
      vitaminInfo: data.vitaminInfo,
      vaccineInfo: data.vaccineInfo,
      anthelminticInfo: data.anthelminticInfo,
    }))
  },
  addCategory: async (data) => {
    try {
      const { category, created_by, type, stock, price } = data

      const res = await Post({
        url: `/api/${category}/create`,
        data: {
          [`${category}_type`]: type,
          [`${category}_stock`]: stock,
          [`${category}_price_${category === "feed" ? "kgs" : "pcs"}`]: price,
          created_by,
        },
      })

      toast({
        type: "success",
        message: res.message,
      })
    } catch (err: any) {
      toast({
        type: "error",
        message: err.data.errors[0].msg,
      })
    }
  },
  editCategory: async (data) => {
    try {
      const { _id, category, type, stock, price } = data
      const url = `/api/${category}/update`

      const res = await Post({
        url,
        data: {
          data: [
            {
              _id,
              [`${category}_type`]: type,
              [`${category}_stock`]: stock,
              [`${category}_price_${category === "feed" ? "kgs" : "pcs"}`]:
                price,
            },
          ],
        },
      })

      toast({
        type: "success",
        message: res.message,
      })
    } catch (err: any) {
      toast({
        type: "error",
        message: err.data.error,
      })
    }
  },
  deleteCategory: async (data) => {
    try {
      const res = await Delete(`/api/${data.category}/delete/${data._id}`)

      toast({
        type: "success",
        message: res.message,
      })
    } catch (err: any) {
      toast({
        type: "error",
        message: err.data.error,
      })
    }
  },
})

export default createCategorySlice
