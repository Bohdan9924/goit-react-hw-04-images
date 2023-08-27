import styled from '@emotion/styled'


export const WrapButton = styled.div`
    display:flex;
    justify-content:center;

`
export const ButtonMore = styled.button`
    margin-bottom:70px;
    padding: 10px 30px; 
    
    font-size:16px;
    border-radius:13px;
    border: 1px solid #3e53f1;
    background-color: #3e53f1;
    color:#ffffff;
    
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    transition: background-color 250ms linear;
    cursor: pointer;
    &:hover{
        background-color: #173bc0;
    }
`