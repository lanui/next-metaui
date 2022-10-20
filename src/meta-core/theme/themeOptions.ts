import { deepmerge } from '@mui/utils'
import { ThemeOptions } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'

// import { Settings } from '../context/SettingsContext'

const themeOptions = (mode: PaletteMode): ThemeOptions => {
  //   const { mode } = settings

  const themeConfig = {
    palette: {
      mode: mode
    }
  }

  return deepmerge(themeConfig, {
    palette: {
      mode: mode
    }
  })
}

export default themeOptions
