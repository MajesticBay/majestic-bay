import React from "react";
import styled from 'styled-components';

interface ButtonProps {
    dark?: boolean;
    className?: string;
}

const Button = styled.button<ButtonProps>`
    padding: 1.2rem 6.8rem;
    font-size: 2rem;
    font-family: 'Inter';
    font-weight: 900;
    line-height: 30.4px;
    letter-spacing: 0.2em;
    text-align: center;
    white-space: nowrap;
    border: none;
    background-color: ${({ dark }) => (dark) ? "var(--color-primary)" : "var(--color-secondary)"};
    color: ${({ dark }) => (dark) ? "var(--color-secondary)" : "var(--color-primary)"};
`;

export const Btn: React.FC<ButtonProps> = ({ className, dark }) => {
    return (
        <Button dark={dark} className={"btn " + className + " pointer"}>CONTACT US</Button>
    )
}