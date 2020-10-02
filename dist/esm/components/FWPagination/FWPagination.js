import React from 'react';
import { FWIcon } from '../FWIcon';
import { StyledPagination, StyledPaginationNumber } from './FWpagination.styles';
import useFWPagination from './FWPagination.hooks';
const FWPagination = ({ currentPage, onChangePage, pageCount, canPreviousPage, canNextPage }) => {
    const { prev, middle, next } = useFWPagination(currentPage, pageCount);
    const renderPaginationNumber = (data) => {
        return data.map((el) => {
            return (React.createElement(StyledPaginationNumber, { key: el, active: el === currentPage, onClick: () => onChangePage(el) }, el));
        });
    };
    const renderLess = () => {
        return React.createElement(StyledPaginationNumber, { onClick: () => onChangePage(currentPage - 5) }, "...");
    };
    const renderMore = () => {
        return React.createElement(StyledPaginationNumber, { onClick: () => onChangePage(currentPage + 5) }, "...");
    };
    const renderPageNumber = () => {
        return (React.createElement(React.Fragment, null,
            prev && prev.length ? renderPaginationNumber(prev) : null,
            prev && prev.length && currentPage > 5 ? renderLess() : null,
            renderPaginationNumber(middle),
            next && next.length && currentPage < pageCount - 4 ? renderMore() : null,
            next && next.length ? renderPaginationNumber(next) : null));
    };
    return (React.createElement(StyledPagination, null,
        React.createElement(FWIcon, { name: "chervonleft", disabled: !canPreviousPage, onClick: () => (canPreviousPage ? onChangePage(currentPage - 1) : null) }),
        renderPageNumber(),
        React.createElement(FWIcon, { name: "chervonleft", disabled: !canNextPage, onClick: () => (canNextPage ? onChangePage(currentPage + 1) : null), style: { transform: 'rotate(180deg)' } })));
};
export default FWPagination;
