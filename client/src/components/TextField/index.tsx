import {FC, useState, HTMLProps} from 'react'

import styles from './styles.module.css'

interface TextFieldProps extends HTMLProps<HTMLInputElement> {
    containerClassName?: string
}

const TextField: FC<TextFieldProps> = ({containerClassName, className, ...props}) => {
    const [isActive, setIsActive] = useState(false)

    const setActive = () => setIsActive(true)
    const setInactive = () => setIsActive(false)

    const setContainerClassName = (): string => {
        let className = isActive ? styles.textFieldActive : styles.textField
        className = containerClassName ? `${className} ${containerClassName}` : className
        return className
    }

    const setInputClassName = (): string => {
        return className ? `${styles.input} ${className}` : `${styles.input}`
    }

    return (
        <div className={setContainerClassName()}>
            <input className={setInputClassName()} {...props} onFocus={setActive} onBlur={setInactive}/>
        </div>
    )
}

export default TextField
