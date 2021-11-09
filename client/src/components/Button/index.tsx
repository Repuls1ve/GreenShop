import {FC, ReactNode} from 'react'

import styles from './styles.module.css'

interface ButtonProps {
    children: ReactNode
    onClick?: () => void
}

const Button: FC<ButtonProps> = ({
    children,
    onClick,
}) => {
    return (
        <button
        onClick={onClick}
        className={styles.default}
        >
            {children}
        </button>
    )
}

export default Button
