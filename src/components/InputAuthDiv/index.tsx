import { useNavigate } from 'react-router-dom';
import { InputDiv, InputForm, SubmitButton } from './styles';

const InputAuthDiv = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    navigate('/room');
  };
  return (
    <InputForm onSubmit={handleSubmit}>
      <InputDiv>
        <h2>Usuário</h2>
        <input type='text' placeholder='Nome de usuário' />
      </InputDiv>
      <InputDiv>
        <h2>Sala</h2>
        <select>
          <option value=''>1</option>
          <option value=''>2</option>
          <option value=''>3</option>
        </select>
      </InputDiv>
      <SubmitButton type='submit'>Entrar</SubmitButton>
    </InputForm>
  );
};

export default InputAuthDiv;
