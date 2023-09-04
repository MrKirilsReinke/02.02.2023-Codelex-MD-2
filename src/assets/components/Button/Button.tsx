import React, { ReactNode } from "react";
import style from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

const Button = ({ children, type = "button", onClick }: ButtonProps) => {
  return (
    <button type={type} className={style.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
