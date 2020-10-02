import React from 'react'

import { StyledText } from './FWText.styles'
import { IFWTextProps } from './FWText.types'

const FWText: React.FC<IFWTextProps> = ({ text, children, ...props }: IFWTextProps) => {
  return <StyledText {...props}>{children || text}</StyledText>
}

export default FWText
