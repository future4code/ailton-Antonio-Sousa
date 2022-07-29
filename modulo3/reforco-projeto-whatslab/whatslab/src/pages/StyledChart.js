import styled from 'styled-components'

export const AreaFlex = styled.div`
display: flex;
flex-direction: column;
width: 400px;
height: 500px;
overflow: auto;
box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.9);
@media (max-width: 500px){
    width: 300px;
}
`
export const AreaChart = styled.div`
    flex: 1;
    word-wrap: break-word;
    
`
export const AreaInput = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 50px;
   background-color: #999;
   @media (max-width: 500px){
    width: 300px;
}
 select {
    border: none;
    width: 100px;
    margin-right: 2px;
    margin-left: 2px;
    height: 30px;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
 }
`
export const inputMeg = styled.input`
    border: none;
    padding: 2px;
    width: 250px;
    height: 30px;
    margin-right: 2px;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`
export const inputEnviar = styled.input`
    border: none;
    padding: 2px;
    height: 30px;
    margin-right: 2px;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`
export const AreaLeft = styled.div`  display: flex;
    display: flex; 
    flex-direction: column;
    text-align: end;
    flex: 1;
    background-color: #DDF7C8;
    margin-right: 1.5em;
    margin-left: 1.5em;
    margin-bottom: 1em;
    padding: 0.9em 0.8em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 1.3;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`
export const AreaRight = styled.div`
    flex: 1;
    background-color: #ffffff;
    margin-left: 1.5em;
    margin-right: 1.5em;
    max-width: 60%;
    min-width: 8%;
    margin-bottom: 1em;
    padding: 0.9em 0.8em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 1.3;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
`

