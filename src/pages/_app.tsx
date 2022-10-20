import type { AppProps } from 'next/app'
import { EmotionCache, CacheProvider } from '@emotion/react'
import createEmotionCache from '../meta-core/utility/create-emotion-cache'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import themeConfig from '../configs/themeConfig'
import themeOptions from '../meta-core/theme/themeOptions'

import '../../styles/globals.css'

interface ExtendedAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const MyApp = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const lightTheme = createTheme(themeOptions(themeConfig.mode))

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
