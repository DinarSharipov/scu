import React, { FC, MouseEvent, ReactNode } from "react";

interface SCUButtonProps {
  id?: string;
  label?: ReactNode;
  onClick?: (
    props: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => void;
}

const Button: FC<SCUButtonProps> = ({ label, onClick, id }) => {
  return (
    <div id={id} onClick={(e) => onClick?.(e)}>
      {label}
    </div>
  );
};

export default Button;

