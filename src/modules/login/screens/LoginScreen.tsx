import { useContext, useState } from 'react';

import Button from '../../../shared/buttons/button/button';
import SVGLogo from '../../../shared/component/icons/SVGLogo';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { useRequest } from '../../../shared/hooks/useRequest';
import Input from '../../../shared/inputs/input/input';
import { BackgroundImage, DivBody, DivLogin, TitleLogin } from '../styles/loginScreen.styles';
import { UserType } from '../types/UserType';

const LoginScreen = () => {
  const { acessToken, setAcessToken } = useGlobalContext();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { postRequest } = useRequest();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };

  const handleLogin = async () => {
    const user = await postRequest<UserType>('http://localhost:8080/auth', {
      email: email,
      senha: senha,
    });

    setAcessToken('novo token');
  };

  return (
    <DivBody>
      <BackgroundImage src="./background.png" />
      <DivLogin>
        <SVGLogo />
        <TitleLogin level={2}>Login</TitleLogin>
        <Input title="Usuário" onChange={handleEmail} value={email} />
        <Input type="password" title="Senha" onChange={handleSenha} value={senha} />
        <Button loading={true} type="primary" onChange={handleLogin} margin="64px 0 16px 0">
          Entrar
        </Button>
      </DivLogin>
    </DivBody>
  );
};

export default LoginScreen;
