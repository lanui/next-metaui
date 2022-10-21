import { ReactNode } from 'react'
import { Settings } from '../context/SettingsContext'

// import { ThemeColor } from '../theme/types'

export type LayoutProps = {
  hidden: boolean
  settings: Settings
  children: ReactNode
  saveSettings: (values: Settings) => void
  verticalNavItems?: VerticalNavItemsType
  scrollToTop?: (props?: any) => ReactNode
  footerContent?: (props?: any) => ReactNode
  verticalAppBarContent?: (props?: any) => ReactNode
  verticalNavMenuContent?: (props?: any) => ReactNode
  verticalNavMenuBranding?: (props?: any) => ReactNode
  afterVerticalNavMenuContent?: (props?: any) => ReactNode
  beforeVerticalNavMenuContent?: (props?: any) => ReactNode
}

export type NavLink = {
  path?: string
  title: string
  action?: string
  subject?: string
  disabled?: boolean
  badgeContent?: string
  externalLink?: string
  openInNewTab?: boolean
  icon?: string | string[] | ReactNode
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
}

export type NavSectionTitle = {
  sectionTitle: string
  action?: string
  subject?: string
}
export type VerticalNavItemsType = (NavLink | NavSectionTitle)[]

export type BlankLayoutProps = {
  children: ReactNode
}
