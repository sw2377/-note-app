import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  type?: "button" | "submit";
  active?: boolean;
  handleClick?: () => void;
  children: ReactNode;
}

const ActionButton = ({ type = "button", active = true, handleClick, children }: ButtonProps) => {
  return (
    <Button type={type} className={active ? "active" : ""} onClick={handleClick}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  padding: 8px 20px;
  border-radius: var(--border-radius);
  font-size: 1.4rem;

  &.active {
    color: var(--color-white);
    background-color: var(--color-blue);
    border: none;
  }

  &:not(.active) {
    color: var(--color-gray);
    background-color: none;
    border: 1px solid var(--color-gray);
    cursor: not-allowed;
  }
`;

export default ActionButton;
