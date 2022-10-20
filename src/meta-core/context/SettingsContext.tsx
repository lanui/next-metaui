import {PaletteMode} from '@mui/material'

export type Settings = {
    mode:PaletteMode
}

export type SettingsContextValue = {
    settings:Settings 
    saveSettings:(updatedSettings:Settings) => void
}