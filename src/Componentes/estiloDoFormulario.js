//Declare o estilo do fomulário aqui
import styled from "styled-components";


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 250px;
  align-items: center;

  input{
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid gray;
    font-size: 1.5rem;
    margin-bottom: 10px;
    width: 400px;
  }

  select{
    width: 200px;
    height: 30px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid gray;
    font-size: 1rem;
    margin-bottom: 10px;
  }

  button{
    width: 200px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: orange;
    color: white;
    font-size: 1.3rem;
      &:hover{
        border-color: darkgray;
        background-color: coral;
      }
  }
`;