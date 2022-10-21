import { ReactNode } from 'react'

import { SvgIconProps } from '@mui/material'

interface CustomizeIconProps {
  iconProps?: SvgIconProps
  icon: string | ReactNode
}

const CustomizationIcon = (props: CustomizeIconProps) => {
  const { icon, iconProps } = props

  const IconTag: ReactNode = icon

  // @ts-ignore
  return <IconTag {...iconProps} />
}

export default CustomizationIcon
