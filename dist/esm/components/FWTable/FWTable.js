import React from 'react';
import { useTable, usePagination } from 'react-table';
import { StyledTable, StyledTHead, StyledTBody, StyledTableWrapper } from './FWTable.styles';
import { FWPagination } from '../FWPagination';
const FWTable = ({ columns, data, fetchData, loading, pageCount: controlledPageCount, pageSize, }) => {
    const defaultColumn = React.useMemo(() => ({
        minWidth: 50,
        width: 150,
    }), []);
    const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page, canPreviousPage, canNextPage, 
    // pageOptions,
    pageCount, gotoPage, 
    // nextPage,
    // previousPage,
    // setPageSize,
    // Get the state from the instance
    state: { pageIndex, pageSize: size }, } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0, pageSize },
        manualPagination: true,
        // hook that we'll handle our own data fetching
        // This means we'll also have to provide our own
        // pageCount.
        pageCount: controlledPageCount,
        defaultColumn,
    }, usePagination);
    // // Listen for changes in pagination and use the state to fetch our new data
    React.useEffect(() => {
        fetchData({ pageIndex, pageSize: size });
    }, [fetchData, pageIndex, size]);
    // Render the UI for your table
    return (React.createElement("div", null,
        React.createElement(StyledTableWrapper, null,
            React.createElement(StyledTable, Object.assign({}, getTableProps()),
                React.createElement(StyledTHead, null, headerGroups.map((headerGroup, index) => (React.createElement("tr", Object.assign({}, headerGroup.getHeaderGroupProps(), { key: index }), headerGroup.headers.map((column, index) => {
                    return (React.createElement("th", Object.assign({}, column.getHeaderProps(), { key: index }),
                        column.render('Header'),
                        React.createElement("span", null, column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : '')));
                }))))),
                React.createElement(StyledTBody, Object.assign({}, getTableBodyProps()), page.map((row, index) => {
                    prepareRow(row);
                    return (React.createElement("tr", Object.assign({}, row.getRowProps(), { key: index }), row.cells.map((cell, index) => {
                        const minWidth = cell.column.minWidth;
                        const width = cell.column.width;
                        return (React.createElement("td", Object.assign({}, cell.getCellProps(), { key: index, style: { minWidth, width } }), cell.render('Cell')));
                    })));
                })))),
        controlledPageCount > 1 ? (React.createElement("div", { className: "fwc-flex fwc-justify-center fwc-w-100" },
            React.createElement(FWPagination, { pageCount: pageCount, currentPage: pageIndex + 1, onChangePage: (value) => {
                    gotoPage(value - 1);
                }, canPreviousPage: canPreviousPage, canNextPage: canNextPage }))) : null));
};
export default FWTable;
