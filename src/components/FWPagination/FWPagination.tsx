import React from 'react'
import { FWIcon } from '../FWIcon'
import { StyledPagination, StyledPaginationNumber } from './FWpagination.styles'
import useFWPagination from './FWPagination.hooks'

const FWPagination: React.FC<any> = ({ currentPage, onChangePage, pageCount, canPreviousPage, canNextPage }: any) => {
  const { prev, middle, next } = useFWPagination(currentPage, pageCount)

  const renderPaginationNumber = (data) => {
    return data.map((el) => {
      return (
        <StyledPaginationNumber key={el} active={el === currentPage} onClick={() => onChangePage(el)}>
          {el}
        </StyledPaginationNumber>
      )
    })
  }

  const renderLess = () => {
    return <StyledPaginationNumber onClick={() => onChangePage(currentPage - 5)}>...</StyledPaginationNumber>
  }

  const renderMore = () => {
    return <StyledPaginationNumber onClick={() => onChangePage(currentPage + 5)}>...</StyledPaginationNumber>
  }

  const renderPageNumber = () => {
    return (
      <>
        {prev && prev.length ? renderPaginationNumber(prev) : null}
        {prev && prev.length && currentPage > 5 ? renderLess() : null}
        {renderPaginationNumber(middle)}
        {next && next.length && currentPage < pageCount - 4 ? renderMore() : null}
        {next && next.length ? renderPaginationNumber(next) : null}
      </>
    )
  }

  return (
    <StyledPagination>
      <FWIcon
        name="chervonleft"
        disabled={!canPreviousPage}
        onClick={() => (canPreviousPage ? onChangePage(currentPage - 1) : null)}
      />
      {renderPageNumber()}
      <FWIcon
        name="chervonleft"
        disabled={!canNextPage}
        onClick={() => (canNextPage ? onChangePage(currentPage + 1) : null)}
        style={{ transform: 'rotate(180deg)' }}
      />
    </StyledPagination>
  )
}

export default FWPagination
