import { deepmerge } from '@mui/utils'
import { ThemeOptions } from '@mui/material/styles'

import { Settings } from '../context/SettingsContext'

import palette from './palette'
import spacing from './spacing'
import breakpoints from './breakpoints'
import Shadows from './shadows'

const themeOptions = (settings: Settings): ThemeOptions => {
  const { mode, themeColor } = settings

  const themeConfig = {
    palette: palette(mode, themeColor),
    typography: {
      fontFamily: [
        'Inter',
        'sans-serif',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(',')
    },
    Shadows: Shadows(mode),
    ...spacing,
    breakpoints: breakpoints(),
    shape: {
      borderRadius: 6
    },
    mixins: {
      toolbar: {
        minHeight: 64
      }
    }
  }

  return deepmerge(themeConfig, {
    palette: {
      ...themeConfig.palette[themeColor]
    }
  })
}

export default themeOptions
