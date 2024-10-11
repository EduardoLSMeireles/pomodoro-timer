/* eslint-disable @typescript-eslint/no-explicit-any */
import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { History } from './pages/History'
import { Home } from './pages/Home'

export function Router({ atThemeToggler, currentTheme }: any) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout
            asThemeToggler={atThemeToggler}
            asCurrentTheme={currentTheme}
          />
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
