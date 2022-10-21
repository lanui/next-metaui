import { useState } from 'react'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import { LayoutProps } from '../types'

import Navigation from '../navigation'
import themeConfig from '../../../configs/themeConfig'

const VerticalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex'
})

const MainContainerWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

/**
 * Vertical Layout Component
 * @param props
 */
const VerticalLayout = (props: LayoutProps) => {
  const { settings, children } = props

  const { contentWidth } = settings

  const navWidth = themeConfig.navigationSize

  // States
  const [navVisible, setNavVisible] = useState<boolean>(false)

  // ** Toggle Functions
  const toggleNavVisibility = () => setNavVisible(!navVisible)

  return (
    <>
      <VerticalLayoutWrapper className='layout-wrapper'>
        <Navigation
          navWidth={navWidth}
          navVisible={navVisible}
          setNavVisible={setNavVisible}
          toggleNavVisibility={toggleNavVisibility}
          {...props}
        />
        {/* Main */}
        <MainContainerWrapper className='layout-content-wrapper'>
          <ContentWrapper
            className='layout-page-content'
            sx={{
              ...(contentWidth === 'boxed' && {
                mx: 'auto',
                '@media (min-width:1440px)': { maxWidth: 1440 },
                '@media (min-width:1200px)': { maxWidth: '100%' }
              })
            }}
          >
            {children}
          </ContentWrapper>
        </MainContainerWrapper>
      </VerticalLayoutWrapper>
    </>
  )
}

export default VerticalLayout
