import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white.default};
  background: ${({ theme }) => theme.colors.black.default};
  height: 100vh;
  width: 100vw;

  > h1 {
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.typography.fontSize.title};
  }

  > p {
    margin-bottom: 40px;
    font-size: ${({ theme }) => theme.typography.fontSize.text};
  }
`
