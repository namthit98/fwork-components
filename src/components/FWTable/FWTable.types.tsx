interface fetchDataParams {
  pageIndex: number
  pageSize: number
}

export interface IFWTable {
  columns: any
  data: any
  fetchData: (params: fetchDataParams) => void
  loading: boolean
  pageCount: number
  pageSize: number
}
