import React from 'react'

export interface IIconBase {
  size?: number
  viewBox?: string
  children?: SVGAElement
  disabled?: boolean
  style?: {
    [key: string]: string
  }
}

const IconBase: React.FC<IIconBase> = ({ size, style, viewBox, disabled, ...props }: IIconBase) => (
  <svg
    fill="currentColor"
    preserveAspectRatio="xMidYMid meet"
    viewBox={viewBox}
    height={size}
    width={size}
    style={{
      ...style,
      opacity: disabled ? '0.2' : '1',
      cursor: disabled ? 'not-allowed' : 'pointer',
    }}
    {...props}
  >
    {props.children}
  </svg>
)

export default IconBase
