import { ButtonProps } from 'antd';

import { ButtonAntd } from './button.styles.ts';

interface CurrentProps extends ButtonProps {
  margin?: string;
}

const Button = ({ margin, ...props }: CurrentProps) => {
  return <ButtonAntd style={{ margin }} {...props} />;
};

export default Button;
