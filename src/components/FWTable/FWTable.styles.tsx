import styled from 'styled-components'
import { TYPE, SERVICE_COLOR, COLOR } from '../../constants'

export const StyledTableWrapper = styled.div`
  /* This will make the table scrollable when it gets too small */
  display: block;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const StyledTable = styled.table.attrs<any, any>((props: any) => {
  return {
    ...props,
  }
})`
  th,
  td {
    border: none;
    padding: 0;
    margin: 0;
  }
  border-spacing: 0px;
  margin-bottom: 2rem;
  width: 100%;
`

export const StyledTHead = styled.thead.attrs<any, any>((props: any) => {
  return {
    ...props,
  }
})`
  text-align: left;
  background: ${COLOR.BLUE_GRAY[50]};

  th {
    padding: 1.2rem 1.6rem;
    margin: 0;
    border: none;
    font-family: SanFranciscoDisplay;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.57;
    color: ${COLOR.BLUE_GRAY[800]};
  }
`

export const StyledTBody = styled.tbody.attrs<any, any>((props: any) => {
  return {
    ...props,
  }
})`
  text-align: left;

  td {
    padding: 1.2rem 1.6rem;
    font-family: SanFranciscoDisplay;
    font-size: 14px;
    line-height: 1.57;
    color: ${COLOR.BLUE_GRAY[800]};
    margin: 0;
    border-bottom: 1px solid ${COLOR.BLUE_GRAY[100]};
  }
`
