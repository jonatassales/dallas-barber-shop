import styled from 'styled-components'

export const SVG = styled.svg`
  .a {
    fill: ${({ theme }) => theme.colors.white.default};
  }
  .b {
    fill: ${({ theme }) => theme.colors.primary.default};
  }
`
