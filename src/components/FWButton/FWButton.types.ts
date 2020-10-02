import { TYPE } from '../../constants'
import { TIconName } from '../FWIcon/icons'

export interface IFWButtonProps {
  /**
   * Button Text
   */
  text?: string

  /**
   * Button Children
   */
  icon?: TIconName

  /**
   * Button Children
   */
  children?: string

  /**
   * Button Type
   */
  variant?: TYPE.TButtonVariant

  /**
   * Button Service
   */
  service?: TYPE.TService

  /**
   * Button Service
   */
  disabled?: boolean

  /**
   * Button onClick
   */
  onClick?: () => void
}

export interface IExtraProps {
  backgroundColor: string
  color: string
  hoverBackgroundColor: string
  borderColorFocus: string
  colorDisable: string
  backgroundColorDisable: string
}
