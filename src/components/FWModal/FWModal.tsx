import React from 'react'

import { FWBox } from '../FWBox'
import { StyledModalWrapper } from './FWModal.styles'
import { FWText } from '../FWText'
import { FWIcon } from '../FWIcon'

const FWModal: React.FC<any> = ({ size, content, actions, title, onClose, isOpen, ...props }: any) => {
  return (
    <StyledModalWrapper onClick={onClose} isOpen={isOpen}>
      <FWBox
        size={size}
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
        }}
      >
        <header className="fwc-flex fwc-justify-between fwc-items-center">
          {title ? <FWText variant="h3" text={title} /> : null}
          <FWIcon name="trash" className="fwc-cursor-pointer" onClick={onClose} />
        </header>
        <main>{content}</main>
        {actions ? <footer className="fwc-flex fwc-justify-end">{actions}</footer> : null}
      </FWBox>
    </StyledModalWrapper>
  )
}

export default FWModal
