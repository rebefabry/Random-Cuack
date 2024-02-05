import styled from "styled-components";

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    alight-items: center;
    padding: 10px;
    margin: 30px;
    gap: 15px;

    img{
        margin-top: 10px;
        width: 350px;
        height: auto;
        border-radius: 5px;
        box-shadow: 1px 2px 3px 4px rgba(12,12,12,0.2);
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
`

export const Button = styled.button`
    font-size: 15px;  
    background: linear-gradient(to bottom right, #43C6AC, #191654);
    border: 0;
    border-radius: 12px;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    line-height: 2.5;
    outline: transparent;
    padding: 0 1rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow .2s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    &:focus{
        box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(25, 22, 84, 1), .125rem .125rem 1rem rgba(67, 198, 172, 1);
    }
    &:hover{
        box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(25, 22, 84, 1), .125rem .125rem 1rem rgba(67, 198, 172, 1);
    }
`


 

