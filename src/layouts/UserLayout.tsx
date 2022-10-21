import { ReactNode } from 'react'

import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'

import { useSettings } from '../meta-core/hooks/useSettings'
import VerticalLayout from '../meta-core/layouts/vertical/VerticalLayout'
import VerticalAppBarContent from '../meta-core/layouts/vertical/appbar'

import VerticalNavItems from '@/navigation/vertical/nav-items'

interface Props {
  children: ReactNode
}

const UserLayout = ({ children }: Props) => {
  const { settings, saveSettings } = useSettings()

  /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/components/use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  const UpgradeProdInfo = () => {
    return (
      <Box sx={{ mx: 'auto' }}>
        <a target='_blank' rel='noreferrer' href='https://lanbery.cc'>
          <img width={230} alt='Blog' src={`/images/misc/lamborcar.jpg`} />
        </a>
      </Box>
    )
  }

  return (
    <VerticalLayout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      verticalNavItems={VerticalNavItems()}
      afterVerticalNavMenuContent={UpgradeProdInfo}
      verticalAppBarContent={props => (
        <VerticalAppBarContent
          hidden={hidden}
          settings={settings}
          saveSettings={saveSettings}
          toggleNavVisibility={props.toggleNavVisibility}
        />
      )}
    >
      {children}
    </VerticalLayout>
  )
}

export default UserLayout
