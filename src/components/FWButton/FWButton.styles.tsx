import styled from 'styled-components'

import { COLOR, TYPE, SERVICE_COLOR } from '../../constants'
import { IExtraProps } from './FWButton.types'

interface ButtonProps {
  variant?: TYPE.TButtonVariant
  service?: TYPE.TService
  theme: {
    service?: TYPE.TService
  }
}

export const StyledButton = styled.button.attrs<ButtonProps, IExtraProps>((props: ButtonProps) => {
  const variant: TYPE.TButtonVariant = props.variant || 'default'
  const service: TYPE.TService = props.service || props.theme.service || 'default'

  if (variant === 'default') {
    return {
      ...defaultProps,
      borderColorFocus: service !== 'default' ? SERVICE_COLOR[service.toUpperCase()].secondary : COLOR.ORANGE[700],
    }
  }

  if (variant === 'secondary') {
    return {
      ...secondaryProps,
      borderColorFocus: service !== 'default' ? SERVICE_COLOR[service.toUpperCase()].secondary : COLOR.ORANGE[700],
    }
  }

  if (variant === 'primary') {
    const primaryProps: IExtraProps = {
      backgroundColor: SERVICE_COLOR[service.toUpperCase()].primary,
      color: '#fff',
      hoverBackgroundColor: SERVICE_COLOR[service.toUpperCase()].secondary,
      borderColorFocus: service !== 'default' ? SERVICE_COLOR[service.toUpperCase()].secondary : COLOR.ORANGE[700],
      colorDisable: COLOR.BLUE_GRAY[500],
      backgroundColorDisable: COLOR.BLUE_GRAY[50],
    }

    return primaryProps
  }

  if (variant === 'alert') {
    return {
      ...alertProps,
      borderColorFocus: service !== 'default' ? SERVICE_COLOR[service.toUpperCase()].secondary : COLOR.ORANGE[700],
    }
  }

  if (variant === 'link') {
    return {
      ...linkProps,
      borderColorFocus: service !== 'default' ? SERVICE_COLOR[service.toUpperCase()].secondary : COLOR.ORANGE[700],
    }
  }
})`
  display: inline-flex;
  align-items: center;
  height: 32px;
  border-radius: 4px;
  border: 1.5px solid transparent;
  outline: none;
  padding: 8px 16px;
  transition: 0.4s;
  font-weight: 600;
  cursor: pointer;
  background: ${(props: IExtraProps) => props.backgroundColor};
  color: ${(props: IExtraProps) => props.color};

  &:hover {
    background: ${(props: IExtraProps) => props.hoverBackgroundColor};
  }

  &:focus {
    border: ${(props: IExtraProps) => `1.5px solid ${props.borderColorFocus}`};
  }
`

const defaultProps: IExtraProps = {
  backgroundColor: COLOR.BLUE_GRAY[50],
  color: COLOR.BLUE_GRAY[800],
  hoverBackgroundColor: COLOR.BLUE_GRAY[100],
  borderColorFocus: COLOR.ORANGE[700],
  colorDisable: COLOR.BLUE_GRAY[500],
  backgroundColorDisable: COLOR.BLUE_GRAY[50],
}

const secondaryProps: IExtraProps = {
  backgroundColor: '#fff',
  color: COLOR.BLUE_GRAY[800],
  hoverBackgroundColor: COLOR.BLUE_GRAY[50],
  borderColorFocus: COLOR.ORANGE[700],
  colorDisable: COLOR.BLUE_GRAY[500],
  backgroundColorDisable: COLOR.BLUE_GRAY[50],
}

const alertProps: IExtraProps = {
  backgroundColor: COLOR.RED[700],
  color: '#fff',
  hoverBackgroundColor: COLOR.RED[600],
  borderColorFocus: COLOR.ORANGE[700],
  colorDisable: COLOR.BLUE_GRAY[500],
  backgroundColorDisable: COLOR.BLUE_GRAY[50],
}

const linkProps: IExtraProps = {
  backgroundColor: '#fff',
  color: COLOR.BLUE[700],
  hoverBackgroundColor: COLOR.BLUE_GRAY[50],
  borderColorFocus: COLOR.ORANGE[700],
  colorDisable: COLOR.BLUE_GRAY[500],
  backgroundColorDisable: COLOR.BLUE_GRAY[50],
}
