import Head from 'next/head'
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { Router } from 'next/router'
import { CacheProvider } from '@emotion/react'

import NProgress from 'nprogress'
import type { EmotionCache } from '@emotion/cache'

import createEmotionCache from '../meta-core/utility/create-emotion-cache'
import themeConfig from '../configs/themeConfig'
import { SettingsProvider, SettingsConsumer } from '../meta-core/context/SettingsContext'
import UserLayout from '../layouts/UserLayout'

import 'react-perfect-scrollbar/dist/css/styles.css'
import '../../styles/globals.css'
import ThemeComponent from '../meta-core/theme/ThemeComponent'

interface ExtendedAppProps extends AppProps {
  Component: NextPage
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

// pace loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

/**
 *
 * @param props
 * @returns
 */
const MyApp = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const getLayout = Component.getLayout ?? (page => <UserLayout>{page}</UserLayout>)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`${themeConfig.templateName} - lanbery `}</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>

      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => {
            return <ThemeComponent settings={settings}> {getLayout(<Component {...pageProps} />)}</ThemeComponent>
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>
  )
}

export default MyApp
