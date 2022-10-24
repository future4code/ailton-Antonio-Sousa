 import styled from 'styled-components'

export const Container = styled.div`
    color: white;
    box-shadow: 0px 3px 16px #0D45CB;
    max-width: 800px;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`
export const Title = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-size: 22px;
    padding: 20px;
`
export const ContainerInput = styled.div`
   display: flex;
   flex-direction: column;
   gap: 3px;
   padding: 4px 0;
   width: 300px;

    input  {
        padding: 5px;
        border: none;
        border-radius: 4px;
        outline: none;
    }
    button {
        padding: 5px;
        border: none;
        border-radius: 4px;
        transition: 0.5s;
        cursor: pointer;
        :hover {
            background-color: #0D45CB;
            color: white;
        }
    }
`
export const History = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`