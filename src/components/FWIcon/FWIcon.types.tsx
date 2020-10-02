import { IIconName } from './icons'

export interface IFWIconProps extends IIconName {
  size?: number
  color?: string
  className?: string
  style?: {
    [key: string]: string
  }
  viewBox?: string
  onClick?: () => void
  disabled?: boolean
}
