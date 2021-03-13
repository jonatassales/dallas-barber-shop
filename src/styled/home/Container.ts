import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
    padding-top: 80px;
    justify-content: flex-start;
  }

  color: ${({ theme }) => theme.colors.white.default};
  background: ${({ theme }) => theme.colors.black.default};
  height: 100vh;
  width: 100vw;

  > h1 {
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.typography.fontSize.title};
    @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
      font-size: ${({ theme }) => theme.typography.fontSize.titleSmall};
    }
  }

  > p {
    margin-bottom: 40px;
    @media screen and (max-width: ${({ theme }) => theme.devices.mobile}) {
      margin-bottom: 80px;
    }
    font-size: ${({ theme }) => theme.typography.fontSize.text};
  }

  > button {
    justify-self: center;
  }
`
