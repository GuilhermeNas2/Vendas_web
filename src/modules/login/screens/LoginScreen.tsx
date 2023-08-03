import { BackgroundImage, DivBody, DivLogin, LogoImage } from '../styles/loginScreen.styles';

const loginScreen = () => {
  return (
    <DivBody>
      <BackgroundImage src="./background.png" />
      <DivLogin>
        <LogoImage src="./logo.png" />
      </DivLogin>
    </DivBody>
  );
};

export default loginScreen;
