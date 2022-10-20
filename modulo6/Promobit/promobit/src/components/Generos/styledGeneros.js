import styled from 'styled-components'

export const Container = styled.div`
    background-color: #2D0C5E;
`
export const ContainerCenter = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440px;
  min-height: 449px;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  color:#fff;
  h1 {
    line-height: 56px;
    font-size: 48px;
    font-weight: 700;
  }

`
export const ContainerMid = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap:40px;
`


export const ContainerButtons = styled.div`
 button {
    width: 100px;
    height: 30px;
    border-radius: 8px;
    border: none;
    margin: 0.3rem;
    transition: 0.2s;
  }
    button:hover {
        background-color: #2D0C5E;
        color:white;
        opacity: 0.9;
    }
`