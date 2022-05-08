import styled from 'styled-components';

export const ChatContainer = styled.div`
  height: 90vh;
  width: 70%;
  min-width: 300px;
  max-width: 600px;
  background-color: #f9f5ff;
  border-radius: 20px;
  box-shadow: 1px 1px 2px #d30c7b;
`;

export const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d30c7b;
  border-radius: 20px 20px 0 0;
  height: 10vh;

  h2 {
    color: #f9f5ff;
  }
`;

export const BodyDiv = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const InputDiv = styled.div`
  border-radius: 0 0 20px 20px;
  background-color: #d30c7b;
  height: 15%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  form {
    width: 90%;
    display: flex;
  }

  form input {
    padding: 10px;
    border-radius: 20px 0px 0px 20px;
    height: 40px;
    width: 85%;
    border: 2px solid #14248a;
  }

  form button {
    cursor: pointer;
    border-radius: 0 20px 20px 0;
    width: 15%;
    background-color: #14248a;
    color: #f9f5ff;
    border: none;
  }
`;

export const ChatDiv = styled.div`
  background-color: #f9f5ff;
  height: 85%;
  padding: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextBox = styled.div`
  background-color: #ffc7e6;
  border-radius: 35px;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 5px;
  margin-bottom: 5px;

  p {
    margin-bottom: 5px;
  }
`;

export const Username = styled.h4`
  margin-bottom: 5px;
`;
