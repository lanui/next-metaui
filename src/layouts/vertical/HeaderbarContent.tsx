import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Menu from 'mdi-material-ui/Menu'
import useMediaQuery from '@mui/material/useMediaQuery'
import Magnify from 'mdi-material-ui/Magnify'

import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'

import ModeToggler from '@/meta-core/layouts/toolbar/ModeToggler'
import UserDropdown from './UserDropdown'

import { Settings } from '@/meta-core/context/SettingsContext'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const HeaderbarContent = (props: Props) => {
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden ? (
          <IconButton
            color='inherit'
            onClick={toggleNavVisibility}
            sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
          >
            <Menu />
          </IconButton>
        ) : null}

        <TextField
          size='small'
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Magnify fontSize='small' />
              </InputAdornment>
            )
          }}
        />
      </Box>
      {/* actions right */}
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        {hiddenSm ? null : (
          <Box
            component={'a'}
            target='_blank'
            rel='noreferrer'
            sx={{ mr: 4, display: 'flex' }}
            href='https://lanbery.cc'
          >
            <span>github</span>
          </Box>
        )}
        <ModeToggler settings={settings} saveSettings={saveSettings} />

        <UserDropdown />
      </Box>
    </Box>
  )
}

export default HeaderbarContent
