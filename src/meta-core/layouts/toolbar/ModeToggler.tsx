import { Settings } from '@/meta-core/context/SettingsContext'
import { PaletteMode } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import WeatherNight from 'mdi-material-ui/WeatherNight'
import WeatherSunny from 'mdi-material-ui/WeatherSunny'

interface Props {
  settings: Settings
  saveSettings: (values: Settings) => void
}

const ModeToggler = (props: Props) => {
  const { settings, saveSettings } = props

  const handleModeChange = (mode: PaletteMode) => {
    saveSettings({ ...settings, mode })
  }

  const handleModeToggle = () => {
    if (settings.mode === 'light') {
      handleModeChange('dark')
    } else {
      handleModeChange('light')
    }
  }

  return (
    <IconButton color='inherit' aria-haspopup='true' onClick={handleModeToggle}>
      {settings.mode === 'dark' ? <WeatherSunny /> : <WeatherNight />}
    </IconButton>
  )
}

export default ModeToggler
