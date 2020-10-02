import styled from 'styled-components'
import { COLOR } from '../../constants'

export const StyledModalWrapper = styled.div.attrs<any, any>((props: any) => {
  return {
    ...props,
  }
})`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  opacity: ${(props: any) => (props.isOpen ? '1' : '0')};
  visibility: ${(props: any) => (props.isOpen ? 'visible' : 'hidden')};
  transition: 0.4s;

  &::after {
    content: ' ';
    background-color: ${COLOR.BLUE_GRAY[900]};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: 1;
  }

  & > div {
    z-index: 2;
    padding: 2.4rem;
    opacity: ${(props: any) => (props.isOpen ? '1' : '0')};
    visibility: ${(props: any) => (props.isOpen ? 'visible' : 'hidden')};
  }

  header {
    margin-bottom: 1.6rem;
  }

  main {
    margin-bottom: 2.4rem;
  }
`
