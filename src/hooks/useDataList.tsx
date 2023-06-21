import useSWR from "swr"

import { Api } from "@/lib/api"

const useDataList = (url: string, queriesArray?: Array<string>) => {
  const queries = queriesArray?.join("&")
  const endpoint =
    queriesArray && queriesArray.length > 0 ? url + `?${queries}` : url

  const { data, isLoading, error, mutate } = useSWR(endpoint, Api.get)

  return {
    data: data?.data,
    loading: isLoading,
    error,
    mutate,
  }
}

export default useDataList
