import styled from 'styled-components';

export const InputForm = styled.form`
  font-family: 'Tapestry', cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6px;

  h2 {
    color: #f3fcf0;
    font-size: 3em;
    text-shadow: 2px 2px 2px #d30c7b;
  }

  input,
  select {
    border: none;
    color: #d30c7b;
    box-shadow: 2px 2px #d30c7b;
    width: 200px;
    padding: 10px;
    border-radius: 7px;
    background-color: #f3fcf0;
  }

  input::placeholder {
    color: #d30c7994;
  }

  select option {
    color: f3fcf0;
  }
`;

export const SubmitButton = styled.button`
  font-family: 'Tapestry', cursive;
  cursor: pointer;
  margin-top: 20px;
  background-color: #d30c7b;
  font-size: 1.5em;
  font-weight: bold;
  color: #f3fcf0;
  padding: 15px;
  border-radius: 10px;
  border: none;
  box-shadow: 2px 2px #f3fcf0;

  :hover {
    background-color: #ff1495;
  }
`;
