import styled from 'styled-components'

import { COLOR, TYPE, SERVICE_COLOR } from '../../constants'
import {} from './FWText.types'

interface ITextProps {
  variant?: TYPE.TTextVariant
}

interface ITextPropsReturn {
  fontSize: string
  fontWeight: string
  color: string
  lineHeight: string
  textTransform?: string
}

export const StyledText = styled.span.attrs<ITextProps, ITextPropsReturn>((props: ITextProps) => {
  const variant = props.variant || 'paragraph'

  if (variant === 'h1') return h1VariantProps
  if (variant === 'h2') return h2VariantProps
  if (variant === 'h3') return h3VariantProps
  if (variant === 'h4') return h4VariantProps
  if (variant === 'important') return importantVariantProps
  if (variant === 'paragraph') return paragraphVariantProps
  if (variant === 'caption') return captionVariantProps
  if (variant === 'sub1') return sub1VariantProps
  if (variant === 'sub2') return sub2VariantProps
})`
  font-size: ${(props: ITextPropsReturn) => props.fontSize};
  font-weight: ${(props: ITextPropsReturn) => props.fontWeight};
  color: ${(props: ITextPropsReturn) => props.color};
`

const h1VariantProps = {
  fontSize: '28px',
  fontWeight: '600',
  color: COLOR.BLUE_GRAY[800],
  lineHeight: '1.14',
}
const h2VariantProps = {
  fontSize: '24px',
  fontWeight: '600',
  color: COLOR.BLUE_GRAY[800],
  lineHeight: '1.17',
}
const h3VariantProps = {
  fontSize: '20px',
  fontWeight: '600',
  color: COLOR.BLUE_GRAY[800],
  lineHeight: '1.2',
}
const h4VariantProps = {
  fontSize: '16px',
  fontWeight: '600',
  color: COLOR.BLUE_GRAY[800],
  lineHeight: '1.25',
}
const importantVariantProps = {
  fontSize: '14px',
  fontWeight: '600',
  color: COLOR.BLUE_GRAY[800],
  lineHeight: '1.43',
}
const paragraphVariantProps = {
  fontSize: '14px',
  fontWeight: '400',
  color: COLOR.BLUE_GRAY[800],
  lineHeight: '1.43',
}
const captionVariantProps = {
  fontSize: '12px',
  fontWeight: '400',
  color: COLOR.BLUE_GRAY[800],
  lineHeight: '1.5',
}
const sub1VariantProps = {
  fontSize: '12px',
  fontWeight: '600',
  color: COLOR.BLUE_GRAY[600],
  textTransform: 'uppercase',
  lineHeight: '1.5',
}
const sub2VariantProps = {
  fontSize: '12px',
  fontWeight: '600',
  color: COLOR.BLUE_GRAY[600],
  lineHeight: '1.5',
}
