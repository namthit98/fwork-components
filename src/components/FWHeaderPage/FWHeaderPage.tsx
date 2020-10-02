import React from 'react'

import { StringHelper } from './../../helper'
import { StyledHeaderPage, StyledTitle, StyledAction } from './FWHeaderPage.styles'
import { IFWHeaderPage } from './FWHeaderPage.types'
import { FWText } from '../FWText'

const FWHeaderPage: React.FC<IFWHeaderPage> = ({ content, actions }: IFWHeaderPage) => {
  return (
    <StyledHeaderPage>
      <StyledTitle>
        {StringHelper.isString(content) ? (
          <FWText text={content as string} variant="h2" className="fwc-truncate" />
        ) : (
          content
        )}
      </StyledTitle>
      <StyledAction>{actions}</StyledAction>
    </StyledHeaderPage>
  )
}

export default FWHeaderPage
