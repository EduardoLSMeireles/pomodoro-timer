import { HeaderContainer } from './styles'

import logoIgnite from '../../assets/logo-ignite.svg'
import { Moon, Scroll, Sun, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header({ asThemeToggler, asCurrentTheme }: any) {
  return (
    <HeaderContainer>
      <div>
        <img src={logoIgnite} alt="" />
        <a onClick={asThemeToggler}>
          {asCurrentTheme ? <Sun size={24} /> : <Moon size={24} />}
        </a>
      </div>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
