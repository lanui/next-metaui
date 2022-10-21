import { PaletteMode } from '@mui/material'
import { ContentWidth } from '../meta-core/theme/types'

type ThemeConfig = {
  mode: PaletteMode
  templateName: string
  routingLoader: boolean
  contentWidth: ContentWidth
  disableRipple: boolean
  navigationSize: number
  menuTextTruncate: boolean
  responsiveFontSizes: boolean
}

const themeConfig: ThemeConfig = {
  templateName: 'Meta-UI' /* App Title */,
  mode: 'light' /* light | dark */,
  contentWidth: 'boxed' /* full | boxed */,
  disableRipple: false,
  routingLoader: true,

  navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,
  menuTextTruncate: true /* true | false */,
  responsiveFontSizes: true
}

export default themeConfig
