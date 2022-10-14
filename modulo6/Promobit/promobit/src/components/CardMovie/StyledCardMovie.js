import styled from 'styled-components'


export const ContainerCardMovie = styled.div`
    margin-top: 1rem ;
    max-width: 300px;
    img {
     max-width: 100%;
     max-height: 500px;
     border-radius: 5px;
    }
`
export const Link = styled.div`
    background-color: #2D0C5E;  
    display: flex;
    text-align: center;
    border-radius: .5rem;
    a {
        text-decoration: none;  
        color: white;
        width: 100%;
        height: 100%;
        transition: 0.5s;
        border-radius: .5rem;
    }
    a:hover {
        background-color: #5C16C5;
    }
`