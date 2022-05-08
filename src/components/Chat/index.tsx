import {
  BodyDiv,
  ChatContainer,
  ChatDiv,
  InputDiv,
  TextBox,
  TitleDiv,
  Username,
} from './styles';
import { BiSend } from 'react-icons/bi';

const Chat = () => {
  return (
    <ChatContainer>
      <TitleDiv>
        <h2>APS - SALA X</h2>
      </TitleDiv>

      <BodyDiv>
        <ChatDiv>
          <TextBox>
            <Username>Matheus</Username>
            <p>Olá, tudo bem com você?</p>
          </TextBox>
          <TextBox>
            <Username>Matheus</Username>
            <p>Olá, tudo bem com você?</p>
          </TextBox>
          <TextBox>
            <Username>Matheus</Username>
            <p>Olá, tudo bem com você?</p>
          </TextBox>

          <TextBox>
            <Username>Matheus</Username>
            <p>Olá, tudo bem com você?</p>
          </TextBox>
          <TextBox>
            <Username>Matheus</Username>
            <p>
              Olá, tudo bem com você?Olá, tudo bem com você?Olá, tudo bem com
              você? Olá, tudo bem com você? Olá, tudo bem com você? Olá, tudo
              bem com você?
            </p>
          </TextBox>

          <TextBox>
            <Username>Matheus</Username>
            <p>Olá, tudo bem com você?</p>
          </TextBox>
          <TextBox>
            <Username>Matheus</Username>
            <p>Olá, tudo bem com você?</p>
          </TextBox>
          <TextBox>
            <Username>Matheus</Username>
            <p>Olá, tudo bem com você?</p>
          </TextBox>
          <TextBox>
            <Username>Matheus</Username>
            <p>Olá, tudo bem com você?</p>
          </TextBox>
        </ChatDiv>
        <InputDiv>
          <form>
            <input type='text' placeholder='Digite a sua mensagem' />
            <button>
              <BiSend size={20} />
            </button>
          </form>
        </InputDiv>
      </BodyDiv>
    </ChatContainer>
  );
};

export default Chat;
