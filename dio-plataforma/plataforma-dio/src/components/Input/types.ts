import React from "react";

export interface IInput
  extends React.InputHTMLAttributes<HTMLInputElement>,
    React.ChangeEventHandler<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  name: string;
  control: any;
  errorMessage?: string;
}
