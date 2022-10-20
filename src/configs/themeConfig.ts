import { PaletteMode } from '@mui/material'

type ThemeConfig = {
  mode: PaletteMode
  templateName: string
}

const themeConfig: ThemeConfig = {
  templateName: 'MetaUI' /* App Title */,
  mode: 'light' /* light | dark */
}

export default themeConfig
