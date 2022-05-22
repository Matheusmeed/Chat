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
import { useEffect, useState } from 'react';

const Chat = ({ socket }) => {
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const messageListener = (message) => {
      setMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        newMessages[message.id] = message;
        return newMessages;
      });
    };

    const deleteMessageListener = (messageID) => {
      setMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        delete newMessages[messageID];
        return newMessages;
      });
    };

    if (socket) {
      socket.on('message', messageListener);
      socket.on('deleteMessage', deleteMessageListener);
      socket.emit('getMessages');

      return () => {
        socket.off('message', messageListener);
        socket.off('deleteMessage', deleteMessageListener);
      };
    }
  }, [socket]);

  const submitForm = (e) => {
    e.preventDefault();
    socket.emit('message', value);
    setValue('');
  };

  return (
    <ChatContainer>
      <TitleDiv>
        <h2>APS - SALA X</h2>
      </TitleDiv>

      <BodyDiv>
        <ChatDiv>
          {[...Object.values(messages)]
            .sort((a, b) => a.time - b.time)
            .map((message) => (
              <TextBox>
                <Username>{message.user.name}</Username>
                <p>{message.value}</p>
              </TextBox>
            ))}
        </ChatDiv>
        <InputDiv>
          <form onSubmit={submitForm}>
            <input
              type='text'
              placeholder='Digite a sua mensagem'
              autoFocus
              value={value}
              onChange={(e) => {
                setValue(e.currentTarget.value);
              }}
            />
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
