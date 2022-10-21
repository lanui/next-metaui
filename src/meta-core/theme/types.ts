import { ReactNode } from 'react'

export type ContentWidth = 'full' | 'boxed'
export type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

export type BlankLayoutPage = {
  children: ReactNode
}

declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      main: string
      tableHeaderBg: string
      primaryGradient: string
    }
  }

  interface PaletteOptions {
    customColors?: {
      main?: string
      tableHeaderBf?: string
      primaryGradient?: string
    }
  }
}
