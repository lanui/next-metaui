import { ReactNode, useRef } from 'react'

import Box, { BoxProps } from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'

// import PerfectScrollbar from 'react-perfect-scrollbar'
import List from '@mui/material/List'

import { Settings } from '../../../context/SettingsContext'
import { VerticalNavItemsType } from '../../types'
import Drawer from './Drawer'
import { hexToRGBA } from '@/meta-core/utility/hex-to-rgba'
import VerticalNavHeader from './VerticalNavHeader'

interface Props {
  hidden: boolean
  navWidth: number
  settings: Settings
  children: ReactNode
  navVisible: boolean
  toggleNavVisibility: () => void
  setNavVisible: (value: boolean) => void
  saveSettings: (values: Settings) => void
  verticalNavItems?: VerticalNavItemsType
}

const StyledBoxForShadow = styled(Box)<BoxProps>({
  top: 50,
  left: -8,
  zIndex: 2,
  height: 75,
  display: 'none',
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  '&.d-block': {
    display: 'block'
  }
})

const Navigation = (props: Props) => {
  // const { hidden } = props

  //state

  const shadowRef = useRef(null)

  // hooks
  const theme = useTheme()

  // Fixes Navigation InfiniteScroll
  // const handleInfiniteScroll = (ref: HTMLElement) => {
  //   if (ref) {
  //     // @ts-ignore
  //     ref._getBoundingClientRect = ref.retBoundingClientRect

  //     // ref.getBoundingClientRect = () => {
  //     //   // @ts-ignore
  //     //   const original = ref._getBoundingClientRect()

  //     //   return { ...original, height: Math.floor(original.height) }
  //     // }
  //   }
  // }

  // const scrollMenu = (container: any) => {
  //   container = hidden ? container.target : container

  //   if (shadowRef && container.scrollTop > 0) {
  //     //@ts-ignore
  //     if (!shadowRef.current.classList.contains('d-block')) {
  //       //@ts-ignore
  //       shadowRef.current.classList.add('d-block')
  //     }
  //   } else if (shadowRef) {
  //     // @ts-ignore
  //     shadowRef.current.classList.remove('d-block')
  //   }
  // }

  // const ScrollWrapper = hidden ? Box : PerfectScrollbar

  return (
    <Drawer {...props}>
      <VerticalNavHeader {...props} />
      <StyledBoxForShadow
        ref={shadowRef}
        sx={{
          background: `linear-gradient(${theme.palette.background.default} 40%,${hexToRGBA(
            theme.palette.background.default,
            0.1
          )} 95%,${hexToRGBA(theme.palette.background.default, 0.05)})`
        }}
      />
      <Box sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <List className='nav-items' sx={{ transition: 'padding .25s ease', pr: 4.5 }}></List>
        </Box>
      </Box>
    </Drawer>
  )
}

export default Navigation
