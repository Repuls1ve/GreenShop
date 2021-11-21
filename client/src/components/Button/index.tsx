import {FC, ButtonHTMLAttributes} from 'react'

import styles from './styles.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button: FC<ButtonProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <button
        className={`${styles.default} ${className}`}
        {...props}
        >
            {children}
        </button>
    )
}

export default Button
