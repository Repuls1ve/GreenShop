import {FC, CSSProperties} from 'react'
import Slider, {createSliderWithTooltip} from 'rc-slider'
import 'rc-slider/assets/index.css';

import styles from './styles.module.css'

const RangeSlider = createSliderWithTooltip(Slider.Range)

const railStyle: CSSProperties = {
    backgroundColor: '#46A35833',
}

const trackStyle: CSSProperties = {
    backgroundColor: '#46A358'
}

const handleStyle: CSSProperties = {
    backgroundColor: '#46A358',
    border: '3px solid white',
    height: '20px',
    width: '20px',
    marginTop: '-8px',
}

interface RangeSliderProps {
    defaultValue: number[]
    min: number
    max: number
    onChange?: (value: number[]) => void
    onAfterChange?: (value: number[]) => void
    className?: string
}

const Range: FC<RangeSliderProps> = ({
    defaultValue,
    min,
    max,
    onChange,
    onAfterChange,
    className
}) => {
    return (
        <>
        <RangeSlider
        defaultValue={defaultValue}
        allowCross={false}
        min={min}
        max={max}
        onChange={onChange}
        onAfterChange={onAfterChange}
        className={className || styles.slider}
        railStyle={railStyle}
        trackStyle={[trackStyle]}
        handleStyle={[handleStyle]}
        />
        </>
    )
}

export default Range
