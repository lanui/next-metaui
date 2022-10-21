import { useContext } from 'react'
import { SettingsContext, SettingsContextValue } from '../context/SettingsContext'

/**
 * 
 * @returns 
 */
export const useSettings = (): SettingsContextValue => useContext(SettingsContext)
