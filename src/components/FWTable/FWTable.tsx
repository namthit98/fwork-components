import React from 'react'
import { useTable, usePagination } from 'react-table'

import { IFWTable } from './FWTable.types'
import { StyledTable, StyledTHead, StyledTBody, StyledTableWrapper } from './FWTable.styles'
import { FWPagination } from '../FWPagination'

const FWTable: React.FC<IFWTable> = ({
  columns,
  data,
  fetchData,
  loading,
  pageCount: controlledPageCount,
  pageSize,
}: IFWTable) => {
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 50, // minWidth is only used as a limit for resizing
      width: 150,
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    // pageOptions,
    pageCount,
    gotoPage,
    // nextPage,
    // previousPage,
    // setPageSize,
    // Get the state from the instance
    state: { pageIndex, pageSize: size },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize }, // Pass our hoisted table state
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      pageCount: controlledPageCount,
      defaultColumn,
    },
    usePagination
  )

  // // Listen for changes in pagination and use the state to fetch our new data
  React.useEffect(() => {
    fetchData({ pageIndex, pageSize: size })
  }, [fetchData, pageIndex, size])

  // Render the UI for your table
  return (
    <div>
      <StyledTableWrapper>
        {/* <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              size,
              pageCount,
              canNextPage,
              canPreviousPage,
              loading,
            },
            null,
            2
          )}
        </code>
      </pre> */}
        <StyledTable {...getTableProps()}>
          <StyledTHead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => {
                  return (
                    <th {...column.getHeaderProps()} key={index}>
                      {column.render('Header')}
                      <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                    </th>
                  )
                })}
              </tr>
            ))}
          </StyledTHead>
          <StyledTBody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    const minWidth = cell.column.minWidth
                    const width = cell.column.width

                    return (
                      <td {...cell.getCellProps()} key={index} style={{ minWidth, width }}>
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </StyledTBody>
        </StyledTable>
      </StyledTableWrapper>
      {controlledPageCount > 1 ? (
        <div className="fwc-flex fwc-justify-center fwc-w-100">
          <FWPagination
            pageCount={pageCount}
            currentPage={pageIndex + 1}
            onChangePage={(value) => {
              gotoPage(value - 1)
            }}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
          />
        </div>
      ) : null}
    </div>
  )
}

export default FWTable
