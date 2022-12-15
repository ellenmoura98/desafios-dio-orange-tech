export interface IButton {
  title: string;
  variant?: string;
  onClick?: () => void;
  type?: string;
  placeholder: string;
  leftIcon: Element;
  name: string;
}

export interface IButtonStyled {
  variant: string;
}
