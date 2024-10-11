/* eslint-disable @typescript-eslint/no-unused-expressions */
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { useState } from 'react'

export function App() {
  const [theme, setTheme] = useState('defaultTheme')

  const themeToggler = () => {
    theme === 'defaultTheme' ? setTheme('lightTheme') : setTheme('defaultTheme')
  }

  return (
    <ThemeProvider theme={theme === 'defaultTheme' ? defaultTheme : defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router
            atThemeToggler={themeToggler}
            currentTheme={theme === 'defaultTheme'}
          />
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
