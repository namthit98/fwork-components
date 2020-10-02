import { TYPE } from '../../constants'

export interface IFWTextProps {
  /**
   * Text variant
   */
  variant?: TYPE.TTextVariant

  /**
   * Text color
   */
  color?: string

  /**
   * Text Text
   */
  text?: string

  /**
   * Text Children
   */
  children?: string

  /**
   * Text className
   */
  className?: string

  /**
   * Text onClick
   */
  onClick?: () => void
}
