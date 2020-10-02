import React from 'react'

import { StyledInput, StyledWrapper, StyledRequiredIcon, StyledTextArea } from './FWInput.styles'
import { FWText } from '../FWText'
import { IFWInput } from './FWInput.types'

const FWInput: React.FC<IFWInput> = ({
  label,
  placeholder,
  value,
  onChange,
  multiline,
  rows,
  service,
  required,
  ...props
}: IFWInput) => {
  return (
    <StyledWrapper>
      {label ? (
        <>
          <FWText variant="important" text={label} />
          {required ? <StyledRequiredIcon>&nbsp;*</StyledRequiredIcon> : null}
        </>
      ) : null}
      {multiline ? (
        <StyledTextArea
          {...props}
          service={service}
          rows={rows || 5}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <StyledInput {...props} service={service} placeholder={placeholder} value={value} onChange={onChange} />
      )}
    </StyledWrapper>
  )
}

export default FWInput
