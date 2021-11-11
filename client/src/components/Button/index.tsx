import {FC, ReactNode} from 'react'

import styles from './styles.module.css'

interface ButtonProps {
    children: ReactNode
    onClick?: () => void
    className?: string
}

const Button: FC<ButtonProps> = ({
    children,
    onClick,
    className
}) => {
    return (
        <button
        onClick={onClick}
        className={`${styles.default} ${className}`}
        >
            {children}
        </button>
    )
}

export default Button
