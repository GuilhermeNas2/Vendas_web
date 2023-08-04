import { Space, Typography } from 'antd';
import styled from 'styled-components';

const { Text, Title } = Typography;

export const DivBody = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const DivLogin = styled.div`
  width: 100%;
  max-width: 646px;
  height: 100vh;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const DivContainer = styled.div`
  width: 100%;
  max-width: 498px;
`;

export const LogoImage = styled.img`
  width: 50%;
`;

export const TitleLogin = styled(Title)``;
