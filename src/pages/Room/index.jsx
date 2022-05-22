import { Chat } from 'components';
import { Container } from './styles';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';

const Room = () => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <Container>
      <Chat socket={socket} />
    </Container>
  );
};

export default Room;
