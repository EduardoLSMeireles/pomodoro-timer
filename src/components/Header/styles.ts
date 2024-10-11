import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 1rem;
  }

  a {
    cursor: pointer;
    width: 3rem;
    height: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme['gray-100']};

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    transition: all 0.2s ease;

    &:hover {
      border-bottom: 3px solid ${(props) => props.theme['green-500']};
    }

    /* react-router-dom adds .active class */
    &.active {
      color: ${(props) => props.theme['green-500']};
    }
  }

  nav {
    display: flex;
    gap: 0.5rem;
  }
`
