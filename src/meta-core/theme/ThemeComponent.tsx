import { ReactNode } from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Settings } from '../context/SettingsContext'
import themeOptions from './themeOptions'
import typography from './typography'

import GlobalStyling from './globalStyles'

interface Props {
  settings: Settings
  children: ReactNode
}

const ThemeComponent = (props: Props) => {
  const { settings, children } = props

  const coreThemeConfig = themeOptions(settings)

  /* Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides */
  let theme = createTheme(coreThemeConfig)

  /* Continue theme creation and pass merged component overrides to CreateTheme function */
  theme = createTheme(theme, { typography: { ...typography(theme) } })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
      {children}
    </ThemeProvider>
  )
}

export default ThemeComponent
