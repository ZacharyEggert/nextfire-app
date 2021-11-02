import React from 'react';

interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children?: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
    return (
        <button
            className={className}
            onClick={(e) => {
                onClick ? onClick(e) : (() => {})();
            }}>
            {children}
        </button>
    );
};

export default Button;