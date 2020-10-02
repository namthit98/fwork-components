import React from 'react'
import { StyledBox } from './FWBox.styles'

const FWBox: React.FC<any> = ({ size, children, width, height, ...props }: any) => {
  return (
    <StyledBox size={size} width={width} height={height} {...props}>
      {children}
    </StyledBox>
  )
}

export default FWBox
