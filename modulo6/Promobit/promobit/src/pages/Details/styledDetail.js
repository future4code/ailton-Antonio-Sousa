import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    max-width: 1440px;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    gap: 1rem;
`


export const Details = styled.div`
    display: flex; 
    margin-top: 1rem ;
    flex-direction: column;
    width: 400px;
    p {
        display: inline;
        margin-left: 5px;
    }
`
export const Overview = styled.div`
    padding: 5px;
    text-align: justify;
    h3 {
        text-align: center;
        margin: 1rem 0;
    }
`