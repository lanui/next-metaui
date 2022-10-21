import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Settings } from '../../../context/SettingsContext'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const AppbarContent = (props: Props) => {
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}></Box>
}
