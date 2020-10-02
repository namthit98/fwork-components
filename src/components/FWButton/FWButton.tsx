import React from 'react'

import { IFWButtonProps } from './'
import { StyledButton } from './FWButton.styles'
import { FWIcon } from '../FWIcon'

const FWButton: React.FC<IFWButtonProps> = ({ text, children, icon, ...props }: IFWButtonProps) => {
  return (
    <StyledButton {...props} style={{ padding: text || children ? '' : '8px' }}>
      {icon ? <FWIcon name={icon} color="currentColor" className={text || children ? 'fwc-mr-2' : ''} /> : null}
      {children || text}
    </StyledButton>
  )
}

export default React.memo(FWButton)
