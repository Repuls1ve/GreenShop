import {FC, useState, HTMLProps} from 'react'

import styles from './styles.module.css'

interface TextFieldProps extends HTMLProps<HTMLInputElement> {
    containerClassName?: string
    labelClassName?: string
    shell?: string
    shellActive?: string
    label?: string
}

const TextField: FC<TextFieldProps> = ({
    containerClassName,
    labelClassName,
    className,
    label,
    shell,
    shellActive,
    ...props
}) => {
    const [isActive, setIsActive] = useState(false)

    const setActive = () => setIsActive(true)
    const setInactive = () => setIsActive(false)

    const setContainerClassName = (): string => {
        let className = containerClassName ? `${styles.container} ${containerClassName}` : styles.container
        return className
    }
    const setShellClassName = (): string => {
        let className =  isActive ? `${styles.textFieldActive} ${shellActive}` : `${styles.textField} ${shell}`
        return className
    }
    const setInputClassName = (): string => {
        return className ? `${styles.input} ${className}` : `${styles.input}`
    }
    const setLabelClassName = (): string => {
        return labelClassName ? `${styles.label} ${labelClassName}` : styles.label
    }
    return (
        <div className={setContainerClassName()}>
            {label && <label className={setLabelClassName()}>{label}</label>}
            <div className={setShellClassName()}>
                <input className={setInputClassName()} {...props} onFocus={setActive} onBlur={setInactive}/>
            </div>
        </div>
    )
}

export default TextField
