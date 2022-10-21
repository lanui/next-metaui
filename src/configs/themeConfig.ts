import { PaletteMode } from '@mui/material'
import { ContentWidth } from '../meta-core/theme/types'

type ThemeConfig = {
  mode: PaletteMode
  templateName: string
  contentWidth: ContentWidth
  disableRipple: boolean
  navigationSize: number
}

const themeConfig: ThemeConfig = {
  templateName: 'MetaUI' /* App Title */,
  mode: 'light' /* light | dark */,
  contentWidth: 'boxed' /* full | boxed */,
  disableRipple: false,
  navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */
}

export default themeConfig
