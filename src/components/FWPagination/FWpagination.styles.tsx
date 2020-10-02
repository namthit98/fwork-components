import styled from 'styled-components'
import { COLOR } from '../../constants'

export const StyledPagination = styled.div.attrs<any, any>((props: any) => {
  return {
    ...props,
  }
})`
  display: flex;
  align-items: center;

  svg,
  span {
    cursor: pointer;
  }

  svg:first-child {
    margin-right: 1rem;
  }
  svg:last-child {
    margin-left: 1rem;
  }

  span {
    margin-right: 0.4rem;
  }

  span:last-child {
    margin-right: 0rem;
  }
`

export const StyledPaginationNumber = styled.span.attrs<any, any>((props: any) => {
  return {
    ...props,
    backgroundColor: props.active ? COLOR.BLUE_GRAY[100] : '#fff',
  }
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor};
  width: 2.4rem;
  height: 2.4rem;
  font-size: 1.4rem;

  &:hover {
    background-color: ${COLOR.BLUE_GRAY[50]};
  }
`
