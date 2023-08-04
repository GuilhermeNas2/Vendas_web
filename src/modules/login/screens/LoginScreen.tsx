import { useState } from 'react';

import Button from '../../../shared/buttons/button/button';
import Input from '../../../shared/inputs/input/input';
import {
  BackgroundImage,
  DivBody,
  DivLogin,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const loginScreen = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };

  const handleLogin = () => {
    alert(`${email}, ${senha}`);
  };

  return (
    <DivBody>
      <BackgroundImage src="./background.png" />
      <DivLogin>
        <LogoImage src="./logo.png" />
        <TitleLogin level={2}>Login</TitleLogin>
        <Input title="Usuário" onChange={handleEmail} value={email} />
        <Input type="password" title="Senha" onChange={handleSenha} value={senha} />
        <Button type="primary" onChange={handleLogin} margin="64px 0 16px 0">
          Entrar
        </Button>
      </DivLogin>
    </DivBody>
  );
};

export default loginScreen;
