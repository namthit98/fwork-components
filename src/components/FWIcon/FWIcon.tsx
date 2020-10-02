/* eslint-disable */
import React from 'react'

import * as AllIcon from './icons'
import { IFWIconProps } from './FWIcon.types'

const keys = Object.keys(AllIcon)

const iconMaps = keys.reduce((result, current, index) => {
  const text = current.replace('Icon', '').toLowerCase()

  result[text] = (props: IFWIconProps) => {
    const Component = AllIcon[current]
    return <Component {...props} />
  }

  return result
}, {})

const FWIcon: React.FC<IFWIconProps> = ({ name, color = '#5c6a82', size = 16, disabled, ...props }: IFWIconProps) => {
  const Component = iconMaps[name] ? iconMaps[name]({ name, color, size, disabled, ...props }) : <p>Icon not found</p>

  return Component
}

export default React.memo(FWIcon)
